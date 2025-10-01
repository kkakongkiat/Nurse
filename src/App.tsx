import React, { useEffect, useState } from "react";
import { Heart, User, Calendar, Shield, ArrowRight, Stethoscope, Pill, BookHeart, Archive, Clock3, CalendarDays, ClipboardList, Syringe,Tally1,Tally3,} from 'lucide-react';
import liff from "@line/liff";
import axios from "axios";

import bedroom from '/image/bedroom.png';
import mail from '/image/mail.png';
import pills from '/image/pills.png';
import risk from '/image/risk.png';
import syring from '/image/syring.png';

type Profile = {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
  email?: string;
};

interface FormData {
  uid: string;
  gender: 'male' | 'female' | '';
  age: string;
  selectedDate: string;
  hasProtection: 'yes' | 'no' | '';
  pillDate: string;
  pillTime: string;
  injectDate: string;
  point: number;
}

// ✅ Loading Component
function LoadingScreen() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #ffffff, #e6f7ff, #ffe6f7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "'Segoe UI', sans-serif",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "70px",
          height: "70px",
          border: "6px solid #b3e0ff",
          borderTop: "6px solid #ffb3d9",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <p
        style={{
          marginTop: "20px",
          fontSize: "1.2rem",
          color: "#4d94ff",
        }}
      >
        กำลังโหลด...
      </p>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<'welcome' | 'form' | 'Women' | 'Pill' | 'MP' | '2P' |'Injection'|'1M'|'3M'| 'Protect' | 'Checking' | 'Follow' | 'FollowP2' | 'FollowPM'| 'Follow1M' | 'Follow3M' | 'Warning' | 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'Q5' >('welcome');
  const [formData, setFormData] = useState<FormData>({
    uid: '',
    gender: '',
    age: '',
    selectedDate: '',
    hasProtection: '',
    pillDate: '',
    pillTime: '',
    injectDate: '',
    point: 0,
  });

  useEffect(() => {
    const initLiff = async () => {
      try {
        await liff.init({ liffId: "2008144125-jnDAw5N4", withLoginOnExternalBrowser: true });

        if (!liff.isLoggedIn()) {
          liff.login({ redirectUri: window.location.href });
        } else {
          const userProfile = await liff.getProfile();
          setProfile(userProfile);
          setFormData(prev => ({ ...prev, uid: userProfile.userId }));
        }
      } catch (err: any) {
        console.error("LIFF init failed", err);
        setError(err.message || "เกิดข้อผิดพลาดในการโหลด LIFF");
      } finally {
        setLoading(false);
      }
    };

    initLiff();
  }, []);
  if (loading) return <LoadingScreen />;

  if (error) {
    return <div style={{ padding: 20, color: "red" }}>❌ {error}</div>;
  }

  const handleGenderSelect = (gender: 'male' | 'female' ) => {
    setFormData(prev => ({ ...prev, gender }));
    if (gender === 'male'){
      setCurrentPage('form');
    } else {
      setCurrentPage('Women');
    }
    
  };

  const handleWomen = (func: 'form' | 'pill' | 'MP' | '2P'|'Injection'|'1M'|'3M') => {
    if (func === 'form'){
      setCurrentPage('form');
    } else if (func === 'pill'){
      setCurrentPage('Pill');
    } else if(func === 'MP'){
      setCurrentPage('MP');
    } else if (func === '2P'){
      setCurrentPage('2P');
    } else if (func === 'Injection'){
      setCurrentPage('Injection');
    } else if (func === '1M'){
      setCurrentPage('1M');
    } else if (func === '3M'){
      setCurrentPage('3M');
    }
    
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      setCurrentPage('Q1');
  };
  const handleP2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage('FollowP2');
  };
  const handlePMSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage('FollowPM');
  };
  const handle1MSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage('Follow1M');
  };
  const handle3MSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage('Follow3M');
  };

  const handleAnswer = (answer: 'yes' | 'no') => {
    if (answer === 'yes'){
      setCurrentPage('Follow');
      axios.post('/api/server?endpoint=add', formData)
      setFormData(prev => ({ ...prev, age: '', selectedDate: '', hasProtection: '',point: 0 }));
    } else {
      setCurrentPage('welcome');
      setFormData(prev => ({ ...prev, age: '', selectedDate: '', hasProtection: '',point: 0 }));
    }
  }

  const handlePill2 = (answer: 'yes' | 'no') => {
    if (answer === 'yes'){
      setCurrentPage('welcome');
      axios.post('/api/server?endpoint=pill2', formData)
      setFormData(prev => ({ ...prev, age: '', selectedDate: '', hasProtection: '', pillDate: '', pillTime: '' }));
    } else {
      setCurrentPage('welcome');
    }
  }
  const handlePillM = (answer: 'yes' | 'no') => {
    if (answer === 'yes'){
      setCurrentPage('welcome');
      axios.post('/api/server?endpoint=pillM', formData)
      setFormData(prev => ({ ...prev, age: '', selectedDate: '', hasProtection: '', pillDate: '', pillTime: '' }));
    } else {
      setCurrentPage('welcome');
    }
  }

  const handleInject1M = (answer: 'yes' | 'no') => {
    if (answer === 'yes'){
      setCurrentPage('welcome');
      axios.post('/api/server?endpoint=inject1M', formData)
      setFormData(prev => ({ ...prev, age: '', selectedDate: '', hasProtection: '', injectDate: '' }));
    } else {
      setCurrentPage('welcome');
    }
  }
  const handleInject3M = (answer: 'yes' | 'no') => {
    if (answer === 'yes'){
      setCurrentPage('welcome');
      axios.post('/api/server?endpoint=inject3M', formData)
      setFormData(prev => ({ ...prev, age: '', selectedDate: '', hasProtection: '', injectDate: '' }));
    } else {
      setCurrentPage('welcome');
    }
  }

  const handlequestion = (answer: 'yes' | 'no', point: number) => {
    if (answer === 'yes' && currentPage === 'Q1'){
      setFormData(prev => ({ ...prev, point: prev.point + point }));
      setCurrentPage('Q2');
    } else if (answer === 'yes' && currentPage === 'Q2'){
      setFormData(prev => ({ ...prev, point: prev.point + point }));
      setCurrentPage('Q3');
    } else if (answer === 'yes' && currentPage === 'Q3'){
      setFormData(prev => ({ ...prev, point: prev.point + point }));
      setCurrentPage('Q4');
    } else if (answer === 'yes' && currentPage === 'Q4'){
      setFormData(prev => ({ ...prev, point: prev.point + point }));
      setCurrentPage('Q5');
    } else if (answer === 'yes' && currentPage === 'Q5'){
      setFormData(prev => ({ ...prev, point: prev.point + point }));
      setCurrentPage('Warning');
    }
  }
  const handlewarning = (answer: 'yes' | 'no') => {
    if (answer === 'yes' && formData.hasProtection === 'yes'){
      setCurrentPage('Protect');
    } else if (answer === 'yes' && formData.hasProtection === 'no'){
      setCurrentPage('Checking');
    }
  }

  const handleend = (answer: 'yes' | 'no') => {
    if (answer === 'yes'){
      setCurrentPage('welcome');
      setFormData(prev => ({ ...prev, age: '', selectedDate: '', hasProtection: '',point: 0 }));
    }
  }

  const isFormValid = (formData.age && formData.selectedDate && formData.hasProtection);
  const isFormValid2 = (formData.age&&formData.selectedDate&&formData.pillDate&&formData.pillTime);
  const isFormValid3 = (formData.age&&formData.selectedDate&&formData.injectDate);

  if (currentPage === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
              <Stethoscope className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">ยินดีต้อนรับ</h1>
            <p className="text-gray-600 text-lg">กรุณาเลือกเพศของท่าน</p>
          </div>

          {/* Gender Selection Cards */}
          <div className="space-y-4">
            <button
              onClick={() => handleGenderSelect('male')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold text-gray-800">ชาย</h3>
                  <p className="text-gray-500">Male</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handleGenderSelect('female')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-pink-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold text-gray-800">หญิง</h3>
                  <p className="text-gray-500">Female</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors" />
              </div>
            </button>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย</p>
          </div>
        </div>
      </div>
    );
  } else if (currentPage === 'form') {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <button
                onClick={() => setCurrentPage('welcome')}
                className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                  ย้อนกลับ
              </button>
            </div>
            <div className="text-center inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4 mx-auto">
                {formData.gender === 'male' ? (
                  <User className="w-8 h-8 text-blue-600" />
                ) : (
                  <Heart className="w-8 h-8 text-pink-600" />
                )}
            </div>
            <div></div>
          </div>
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">กรอกข้อมูลส่วนตัว</h1>
          <p className="text-center text-gray-600">กรุณากรอกข้อมูลให้ครบถ้วน</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Age */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors
                                ${formData.age ? "text-green-600" : "text-red-600"}`}>
                อายุ *
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                placeholder="กรอกอายุของท่าน"
                min="1"
                max="120"
                required
              />
            </div>

            {/* Date Selection */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors
                                ${formData.selectedDate ? "text-green-600" : "text-red-600"}`}>
                <Calendar className="inline w-4 h-4 mr-2" />
                วันที่มีเพศสัมพันธ์ *
              </label>
              <input
                type="date"
                value={formData.selectedDate}
                onChange={(e) => handleInputChange('selectedDate', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Protection Options */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors
                                ${formData.hasProtection? "text-green-600" : "text-red-600"}`}>
                <Shield className="inline w-4 h-4 mr-2" />
                การป้องกัน *
              </label>
              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-green-50 hover:border-green-300 transition-colors">
                  <input
                    type="radio"
                    name="protection"
                    value="yes"
                    checked={formData.hasProtection === 'yes'}
                    onChange={(e) => handleInputChange('hasProtection', e.target.value)}
                    className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300"
                    required
                  />
                  <span className="ml-3 text-gray-700 font-medium">ป้องกัน</span>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-red-50 hover:border-red-300 transition-colors">
                  <input
                    type="radio"
                    name="protection"
                    value="no"
                    checked={formData.hasProtection === 'no'}
                    onChange={(e) => handleInputChange('hasProtection', e.target.value)}
                    className="w-4 h-4 text-red-600 focus:ring-red-500 border-gray-300"
                    required
                  />
                  <span className="ml-3 text-gray-700 font-medium">ไม่ได้ป้องกัน</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 ${
                  isFormValid
                    ? `${formData.gender === 'male' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-pink-600 hover:bg-pink-700'} shadow-lg hover:shadow-xl transform hover:-translate-y-1`
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                บันทึกข้อมูล
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย
          </p>
        </div>
      </div>
    </div>
  );
  } else if (currentPage === 'Women') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="mb-8">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <button
                  onClick={() => setCurrentPage('welcome')}
                  className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                  <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                    กลับ
                </button>
              </div>
              <div className="text-center inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4 mx-auto">
                <Heart className="w-10 h-10 text-pink-600" />
              </div>
            </div>
            <h1 className="text-center text-3xl font-bold text-gray-800 mb-2">บริการสำหรับผู้หญิง</h1>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => handleWomen('pill')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Pill className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold text-gray-800">บันทึกการกินยาคุม</h3>
                  <p className="text-gray-500">Birth control pill intake record</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handleWomen('form')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-pink-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <BookHeart className="w-6 h-6 text-pink-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold text-gray-800">บันทึกความเสี่ยงการมีเพศสัมพันธ์</h3>
                  <p className="text-gray-500">Sexual risk record</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors" />
              </div>
            </button>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย</p>
          </div>
        </div>
      </div>
    );
  } else if (currentPage === 'Pill') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="mb-8">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <button
                  onClick={() => setCurrentPage('Women')}
                  className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                  <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                    กลับ
                </button>
              </div>
              <div className="text-center inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
                <Archive className="w-10 h-10 text-pink-600" />
              </div>
            </div>
            <h1 className="text-center text-3xl font-bold text-gray-800 mb-2">บันทึกการกินยาคุม</h1>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => handleWomen('MP')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Pill className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold text-gray-800">ยาคุมกำเนิดแบบรายเดือน</h3>
                  <p className="text-gray-500">Monthly birth control pills</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handleWomen('2P')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-pink-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <BookHeart className="w-6 h-6 text-pink-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold text-gray-800">ยาคุมกำเนิดแบบ 2 เม็ด</h3>
                  <p className="text-gray-500">Two-pill birth control pills</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handleWomen('Injection')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-orange-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <Syringe className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold text-gray-800">ยาคุมกำเนิดแบบฉีด</h3>
                  <p className="text-gray-500">Contraceptive Injection</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
              </div>
            </button>

          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย</p>
          </div>
        </div>
      </div>
    );
  }else if (currentPage === 'Injection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="mb-8">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <button
                  onClick={() => setCurrentPage('Pill')}
                  className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                  <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                    กลับ
                </button>
              </div>
              <div className="text-center inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
                <Syringe className="w-10 h-10 text-orange-600" />
              </div>
            </div>
            <h1 className="text-center text-3xl font-bold text-gray-800 mb-2">ยาคุมกำเนิดแบบฉีด</h1>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => handleWomen('1M')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Tally1 className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold text-gray-800">แบบราย 1 เดือน</h3>
                  <p className="text-gray-500">1 month type</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handleWomen('3M')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-pink-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <Tally3 className="w-6 h-6 text-pink-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold text-gray-800">แบบราย 3 เดือน</h3>
                  <p className="text-gray-500">3 month type</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors" />
              </div>
            </button>

          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย</p>
          </div>
        </div>
      </div>
    );
  } else if (currentPage === 'MP') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <button
                onClick={() => setCurrentPage('Pill')}
                className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                  ย้อนกลับ
              </button>
            </div>
            <div className="text-center inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4 mx-auto">
                {formData.gender === 'male' ? (
                  <User className="w-8 h-8 text-blue-600" />
                ) : (
                  <Heart className="w-8 h-8 text-pink-600" />
                )}
            </div>
            <div></div>
          </div>
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">กรอกข้อมูลส่วนตัว</h1>
          <p className="text-center text-gray-600">กรุณากรอกข้อมูลให้ครบถ้วน</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handlePMSubmit} className="space-y-6">
            {/* Age */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors
                                ${formData.age ? "text-green-600" : "text-red-600"}`}>
                อายุ *
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                placeholder="กรอกอายุของท่าน"
                min="1"
                max="120"
                required
              />
            </div>

            {/* Date Selection */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors
                                ${formData.selectedDate ? "text-green-600" : "text-red-600"}`}>
                <Calendar className="inline w-4 h-4 mr-2" />
                วันที่มีเพศสัมพันธ์ *
              </label>
              <input
                type="date"
                value={formData.selectedDate}
                onChange={(e) => handleInputChange('selectedDate', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                required
              />
            </div>
            {/* PILL */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors
                                ${formData.pillDate ? "text-green-600" : "text-red-600"}`}>
                <CalendarDays className="inline w-4 h-4 mr-2" />
                วันที่กินยาคุม *
              </label>
              <input
                type="date"
                value={formData.pillDate}
                onChange={(e) => handleInputChange('pillDate', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors
                                ${formData.pillTime ? "text-green-600" : "text-red-600"}`}>
                <Clock3 className="inline w-4 h-4 mr-2" />
                เวลาที่กินยา *
              </label>
              <input
                type="time"
                value={formData.pillTime}
                onChange={(e) => handleInputChange('pillTime', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={!isFormValid2}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 ${
                  isFormValid2
                    ? `${formData.gender === 'male' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-pink-600 hover:bg-pink-700'} shadow-lg hover:shadow-xl transform hover:-translate-y-1`
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                บันทึกข้อมูล
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย
          </p>
        </div>
      </div>
    </div>
    );
  }else if (currentPage === '2P') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <button
                onClick={() => setCurrentPage('Pill')}
                className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                  ย้อนกลับ
              </button>
            </div>
            <div className="text-center inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4 mx-auto">
                {formData.gender === 'male' ? (
                  <User className="w-8 h-8 text-blue-600" />
                ) : (
                  <Heart className="w-8 h-8 text-pink-600" />
                )}
            </div>
            <div></div>
          </div>
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">กรอกข้อมูลส่วนตัว</h1>
          <p className="text-center text-gray-600">กรุณากรอกข้อมูลให้ครบถ้วน</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleP2Submit} className="space-y-6">
            {/* Age */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors
                                ${formData.age ? "text-green-600" : "text-red-600"}`}>
                อายุ *
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                placeholder="กรอกอายุของท่าน"
                min="1"
                max="120"
                required
              />
            </div>

            {/* Date Selection */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors
                                ${formData.selectedDate ? "text-green-600" : "text-red-600"}`}>
                <Calendar className="inline w-4 h-4 mr-2" />
                วันที่มีเพศสัมพันธ์ *
              </label>
              <input
                type="date"
                value={formData.selectedDate}
                onChange={(e) => handleInputChange('selectedDate', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                required
              />
            </div>
            {/* PILL */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors
                                ${formData.pillDate ? "text-green-600" : "text-red-600"}`}>
                <CalendarDays className="inline w-4 h-4 mr-2" />
                วันที่กินยาคุม *
              </label>
              <input
                type="date"
                value={formData.pillDate}
                onChange={(e) => handleInputChange('pillDate', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors
                                ${formData.pillTime ? "text-green-600" : "text-red-600"}`}>
                <Clock3 className="inline w-4 h-4 mr-2" />
                เวลาที่กินยาคุมเม็ดแรก *
              </label>
              <input
                type="time"
                value={formData.pillTime}
                onChange={(e) => handleInputChange('pillTime', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={!isFormValid2}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 ${
                  isFormValid2
                    ? `${formData.gender === 'male' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-pink-600 hover:bg-pink-700'} shadow-lg hover:shadow-xl transform hover:-translate-y-1`
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                บันทึกข้อมูล
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย
          </p>
        </div>
      </div>
    </div>
    );
  } else if (currentPage === '1M') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <button
                onClick={() => setCurrentPage('Injection')}
                className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                  ย้อนกลับ
              </button>
            </div>
            <div className="text-center inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4 mx-auto">
                {formData.gender === 'male' ? (
                  <User className="w-8 h-8 text-blue-600" />
                ) : (
                  <Heart className="w-8 h-8 text-pink-600" />
                )}
            </div>
            <div></div>
          </div>
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">กรอกข้อมูลส่วนตัว</h1>
          <p className="text-center text-gray-600">กรุณากรอกข้อมูลให้ครบถ้วน</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handle1MSubmit} className="space-y-6">
            {/* Age */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors
                                ${formData.age ? "text-green-600" : "text-red-600"}`}>
                อายุ *
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                placeholder="กรอกอายุของท่าน"
                min="1"
                max="120"
                required
              />
            </div>

            {/* Date Selection */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors
                                ${formData.selectedDate ? "text-green-600" : "text-red-600"}`}>
                <Calendar className="inline w-4 h-4 mr-2" />
                วันที่มีเพศสัมพันธ์ *
              </label>
              <input
                type="date"
                value={formData.selectedDate}
                onChange={(e) => handleInputChange('selectedDate', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                required
              />
            </div>
            {/* PILL */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors
                                ${formData.injectDate ? "text-green-600" : "text-red-600"}`}>
                <CalendarDays className="inline w-4 h-4 mr-2" />
                วันที่เริ่มฉีดยาคุม *
              </label>
              <input
                type="date"
                value={formData.injectDate}
                onChange={(e) => handleInputChange('injectDate', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={!isFormValid3}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 ${
                  isFormValid3
                    ? `${formData.gender === 'male' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-pink-600 hover:bg-pink-700'} shadow-lg hover:shadow-xl transform hover:-translate-y-1`
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                บันทึกข้อมูล
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย
          </p>
        </div>
      </div>
    </div>
    );
  } else if (currentPage === '3M') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <button
                onClick={() => setCurrentPage('Injection')}
                className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                  ย้อนกลับ
              </button>
            </div>
            <div className="text-center inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4 mx-auto">
                {formData.gender === 'male' ? (
                  <User className="w-8 h-8 text-blue-600" />
                ) : (
                  <Heart className="w-8 h-8 text-pink-600" />
                )}
            </div>
            <div></div>
          </div>
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">กรอกข้อมูลส่วนตัว</h1>
          <p className="text-center text-gray-600">กรุณากรอกข้อมูลให้ครบถ้วน</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handle3MSubmit} className="space-y-6">
            {/* Age */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors
                                ${formData.age ? "text-green-600" : "text-red-600"}`}>
                อายุ *
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                placeholder="กรอกอายุของท่าน"
                min="1"
                max="120"
                required
              />
            </div>

            {/* Date Selection */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors
                                ${formData.selectedDate ? "text-green-600" : "text-red-600"}`}>
                <Calendar className="inline w-4 h-4 mr-2" />
                วันที่มีเพศสัมพันธ์ *
              </label>
              <input
                type="date"
                value={formData.selectedDate}
                onChange={(e) => handleInputChange('selectedDate', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                required
              />
            </div>
            {/* PILL */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors
                                ${formData.injectDate ? "text-green-600" : "text-red-600"}`}>
                <CalendarDays className="inline w-4 h-4 mr-2" />
                วันที่เริ่มฉีดยาคุม *
              </label>
              <input
                type="date"
                value={formData.injectDate}
                onChange={(e) => handleInputChange('injectDate', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={!isFormValid3}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 ${
                  isFormValid3
                    ? `${formData.gender === 'male' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-pink-600 hover:bg-pink-700'} shadow-lg hover:shadow-xl transform hover:-translate-y-1`
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                บันทึกข้อมูล
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย
          </p>
        </div>
      </div>
    </div>
    );
  } else if (currentPage === 'Protect') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="mb-8">
          
          <div className="flex flex-col items-center justify-center min-h-screen ">
            
            <h1 className="text-2xl font-bold text-green-700 mb-4">
              เยี่ยมมาก! 🎉
            </h1>
            <p className="text-lg text-gray-700 mb-6 text-center">
              การป้องกันในการมีเพศสัมพันธ์เป็นสิ่งที่ยอดเยี่ยม  
              คุณกำลังดูแลสุขภาพและความปลอดภัยของตัวเองและคู่ของคุณ 💚
            </p>
            <img
              src={bedroom}
              alt="safe love"
              className="w-40 h-40"
            />

            <div className="w-full mb-8 mt-8">
              <div className="text-center">
                <button
                      onClick={() => handleend("yes")}
                      className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                      <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                        กลับ
                </button>
              </div>
            </div>

          </div>
          </div>
          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย</p>
          </div>
        </div>
      </div>
    );
  }else if (currentPage === 'Checking') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-blue-50 p-6 flex flex-col">
        <div className="grid grid-cols-3 gap-8">
              <div>
                {/* <button
                  onClick={() => setCurrentPage('form')}
                  className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                  <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                    กลับ
                </button> */}
              </div>
            </div>
      <h1 className="text-2xl font-bold text-center text-pink-700 mb-3">
        คุณมีอาการเหล่านี้หรือไม่?
      </h1>
      <h2 className="text-l font-bold text-center text-pink-500 mb-6">
        หากคุณมีอาการเหล่านี้ กรุณาตอบ "ใช่" เพื่อรับการแจ้งเตือนความเสี่ยงในการเกิดโรค
        </h2>
      <div className="">
      <div>

      </div>
      <div>
      {/* ข้อ 1 */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-blue-700 mb-2">
          1. อาการที่พบบ่อย
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>ตกขาวผิดปกติ (สีเหลือง, เขียว, เทา หรือเป็นฟอง)</li>
          <li>มีกลิ่นเหม็นรุนแรง</li>
          <li>คันหรือระคายเคืองช่องคลอด</li>
          <li>ปัสสาวะแสบขัด หรือเจ็บเวลาปัสสาวะ</li>
          <li>เจ็บเวลามีเพศสัมพันธ์</li>
          <li>เลือดออกผิดปกติ นอกประจำเดือนหรือหลังมีเพศสัมพันธ์</li>
        </ul>
      </section>

      {/* ข้อ 2 */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-blue-700 mb-2">
          2. อาการที่เห็นชัดเจนที่อวัยวะเพศ
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>มีแผลริมแข็ง/แผลเรื้อรัง (เช่น ซิฟิลิส)</li>
          <li>มีตุ่มใสแตกเป็นแผลเจ็บ (เช่น เริม)</li>
          <li>
            มีหูด/ติ่งเนื้อ คล้ายหงอนไก่รอบช่องคลอดหรือทวารหนัก (HPV)
          </li>
        </ul>
      </section>

      {/* ข้อ 3 */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-blue-700 mb-2">
          3. อาการร่วมทั่วไปของร่างกาย
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>เจ็บท้องน้อย หรือปวดท้องเรื้อรัง</li>
          <li>ต่อมน้ำเหลืองขาหนีบบวมโต</li>
          <li>มีไข้ อ่อนเพลีย หรือเหงื่อออกกลางคืน</li>
          <li>ตัวเหลือง ตาเหลือง (กรณีไวรัสตับอักเสบบี/ซี)</li>
        </ul>
      </section>
      </div>
      <div>
        
      </div>
      </div>
      {/* ปุ่มตอบ */}
      <div className="mt-auto flex gap-4">
        <button
          onClick={() => handleAnswer("yes")}
          className="w-1/2 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition"
        >
          ใช่
        </button>
        <button
          onClick={() => handleAnswer("no")}
          className="w-1/2 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition"
        >
          ไม่ใช่
        </button>
      </div>
    </div>
    );
  }else if (currentPage === 'Follow') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col items-center justify-center min-h-screen ">
              
              <h1 className="text-2xl font-bold text-green-700 mb-4">
                ขอบคุณสำหรับการใช้บริการ! 💌
              </h1>
              <p className="text-lg text-gray-700 text-center">
                ระบบจะทำการส่งข้อความแจ้งเตือนผ่านไลน์ Official สำหรับความเสี่ยงในการเกิดโรค 💖
              </p>
              <img
                src={mail}
                alt="safe love"
                className="w-40 h-40"
              />
              <div className="w-full mb-8 mt-8">
                <div className="text-center">
                  <button
                        onClick={() => setCurrentPage('welcome')}
                        className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                        <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                          กลับ
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย</p>
          </div>
        </div>
      </div>
    );
  }else if (currentPage === 'FollowPM') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col items-center justify-center mb-8 ">
              
              <h1 className="text-2xl font-bold text-green-700 mb-4">
                บันทึกการกินยาคุมแบบรายเดือน! 💊
              </h1>
              <p className="text-lg text-gray-700 text-center">
                หากกดยืนยัน
              </p>
              <p className="text-lg text-gray-700 text-center mb-6">
                ระบบจะทำการส่งข้อความแจ้งเตือนผ่านไลน์ Official สำหรับการกินยาคุมของท่าน 💖
              </p>
              <img
                src={pills}
                alt="safe love"
                className="w-40 h-40"
              />
            </div>
          
            <button
              onClick={() => handlePillM("yes")}
              className="w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition">
              ยืนยัน
            </button>
          
          <div className="w-full mb-8 mt-8">
              <div className="text-center">
                <button
                      onClick={() => setCurrentPage('MP')}
                      className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                      <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                        กลับ
                </button>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย</p>
          </div>
        </div>
      </div>
    );
  }else if (currentPage === 'FollowP2') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col items-center justify-center mb-8 ">
              
              <h1 className="text-2xl font-bold text-green-700 mb-4">
                บันทึกการกินยาคุมแบบ 2 เม็ด! 💊
              </h1>
              <p className="text-lg text-gray-700 text-center">
                หากกดยืนยัน
              </p>
              <p className="text-lg text-gray-700 text-center mb-6">
                ระบบจะทำการส่งข้อความแจ้งเตือนผ่านไลน์ Official สำหรับการกินยาคุมของท่าน 💖
              </p>
              <img
                src={pills}
                alt="safe love"
                className="w-40 h-40"
              />
            </div>
          
            <button
              onClick={() => handlePill2("yes")}
              className="w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition">
              ยืนยัน
            </button>
          
          <div className="w-full mb-8 mt-8">
              <div className="text-center">
                <button
                      onClick={() => setCurrentPage('2P')}
                      className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                      <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                        กลับ
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย</p>
          </div>
        </div>
      </div>
    );
  } else if (currentPage === 'Follow1M') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col items-center justify-center mb-8 ">
              
              <h1 className="text-2xl font-bold text-green-700 mb-4">
                บันทึกการฉีดยาคุมแบบ 1 เดือน! 💉
              </h1>
              <p className="text-lg text-gray-700 text-center">
                หากกดยืนยัน
              </p>
              <p className="text-lg text-gray-700 text-center mb-6">
                ระบบจะทำการส่งข้อความแจ้งเตือนผ่านไลน์ Official สำหรับการกินยาคุมของท่าน 💖
              </p>
              <img
                src={syring}
                alt="safe love"
                className="w-40 h-40"
              />
            </div>
          
            <button
              onClick={() => handleInject1M("yes")}
              className="w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition">
              ยืนยัน
            </button>
          
          <div className="w-full mb-8 mt-8">
              <div className="text-center">
                <button
                      onClick={() => setCurrentPage('1M')}
                      className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                      <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                        กลับ
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย</p>
          </div>
        </div>
      </div>
    );
  } else if (currentPage === 'Follow3M') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col items-center justify-center mb-8 ">
              
              <h1 className="text-2xl font-bold text-green-700 mb-4">
                บันทึกการฉีดยาคุมแบบ 3 เดือน! 💉
              </h1>
              <p className="text-lg text-gray-700 text-center">
                หากกดยืนยัน
              </p>
              <p className="text-lg text-gray-700 text-center mb-6">
                ระบบจะทำการส่งข้อความแจ้งเตือนผ่านไลน์ Official สำหรับการกินยาคุมของท่าน 💖
              </p>
              <img
                src={syring}
                alt="safe love"
                className="w-40 h-40"
              />
            </div>
          
            <button
              onClick={() => handleInject3M("yes")}
              className="w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition">
              ยืนยัน
            </button>
          
          <div className="w-full mb-8 mt-8">
              <div className="text-center">
                <button
                      onClick={() => setCurrentPage('3M')}
                      className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                      <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                        กลับ
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย</p>
          </div>
        </div>
      </div>
    );
  } else if (currentPage === 'Q1') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
              <ClipboardList className="w-10 h-10 text-blue-600" />
            </div>
            <p className="text-gray-600 text-lg">คำนวณความเสี่ยงของคุณ</p>
            <p className="text-gray-600 text-lg">ตอบคำถามต่อไปนี้</p>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">การใช้ถุงยางอนามัย</h3>
          </div>

          {/* Gender Selection Cards */}
          <div className="space-y-4">
            <button
              onClick={() => handlequestion("yes",0)}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                {/* <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <User className="w-6 h-6 text-blue-600" />
                </div> */}
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 ">ทุกครั้ง</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handlequestion("yes",2)}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-pink-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                {/* <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div> */}
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">บางครั้ง</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handlequestion("yes",3)}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-pink-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                {/* <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div> */}
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">ไม่เคยใช้เลย</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors" />
              </div>
            </button>

          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย</p>
          </div>
        </div>
      </div>
    );
  } else if (currentPage === 'Q2') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
              <ClipboardList className="w-10 h-10 text-blue-600" />
            </div>
            <p className="text-gray-600 text-lg">คำนวณความเสี่ยงของคุณ</p>
            <p className="text-gray-600 text-lg">ตอบคำถามต่อไปนี้</p>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">จำนวนคู่นอน</h3>
          </div>

          {/* Gender Selection Cards */}
          <div className="space-y-4">
            <button
              onClick={() => handlequestion("yes",0)}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                {/* <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <User className="w-6 h-6 text-blue-600" />
                </div> */}
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 ">1 คนมั่นคง</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handlequestion("yes",2)}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-pink-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                {/* <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div> */}
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">มากกว่า 1 คน แต่ &lt; 5 คน/ปี</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handlequestion("yes",3)}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                {/* <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div> */}
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">&gt; 5 คน/ปี หรือไม่ทราบแน่ชัด</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>

          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย</p>
          </div>
        </div>
      </div>
    );
  } else if (currentPage === 'Q3') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
              <ClipboardList className="w-10 h-10 text-blue-600" />
            </div>
            <p className="text-gray-600 text-lg">คำนวณความเสี่ยงของคุณ</p>
            <p className="text-gray-600 text-lg">ตอบคำถามต่อไปนี้</p>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">การมีเพศสัมพันธ์กับกลุ่มเสี่ยง</h3>
            <p>(Sex worker, Partner ที่ไม่ทราบประวัติสุขภาพ)</p>
          </div>

          {/* Gender Selection Cards */}
          <div className="space-y-4">
            <button
              onClick={() => handlequestion("yes",0)}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                {/* <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <User className="w-6 h-6 text-blue-600" />
                </div> */}
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 ">ไม่เคย</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handlequestion("yes",2)}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-pink-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                {/* <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div> */}
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">เคยบางครั้ง</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handlequestion("yes",3)}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                {/* <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div> */}
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">บ่อย/ประจำ</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>

          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย</p>
          </div>
        </div>
      </div>
    );
  } else if (currentPage === 'Q4') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
              <ClipboardList className="w-10 h-10 text-blue-600" />
            </div>
            <p className="text-gray-600 text-lg">คำนวณความเสี่ยงของคุณ</p>
            <p className="text-gray-600 text-lg">ตอบคำถามต่อไปนี้</p>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">พฤติกรรมการป้องกันอื่น</h3>
          </div>

          {/* Gender Selection Cards */}
          <div className="space-y-4">
            <button
              onClick={() => handlequestion("yes",-1)}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                {/* <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <User className="w-6 h-6 text-blue-600" />
                </div> */}
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 ">ใช้ PrEP/PEP หรือเคยตรวจสุขภาพสม่ำเสมอ</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handlequestion("yes",1)}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-pink-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                {/* <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div> */}
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">ไม่เคยตรวจเลย</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors" />
              </div>
            </button>

          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย</p>
          </div>
        </div>
      </div>
    );
  } else if (currentPage === 'Q5') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
              <ClipboardList className="w-10 h-10 text-blue-600" />
            </div>
            <p className="text-gray-600 text-lg">คำนวณความเสี่ยงของคุณ</p>
            <p className="text-gray-600 text-lg">ตอบคำถามต่อไปนี้</p>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">การใช้แอลกอฮอล์/สารเสพติดก่อนมีเพศสัมพันธ์</h3>
          </div>

          {/* Gender Selection Cards */}
          <div className="space-y-4">
            <button
              onClick={() => handlequestion("yes",0)}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                {/* <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <User className="w-6 h-6 text-blue-600" />
                </div> */}
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 ">ไม่เคย</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handlequestion("yes",2)}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-pink-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                {/* <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div> */}
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">เคยบางครั้ง</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handlequestion("yes",3)}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                {/* <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div> */}
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">บ่อย/ประจำ</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>

          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย</p>
          </div>
        </div>
      </div>
    );
  } else if (currentPage === 'Warning') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="mb-8">
          
          <div className="flex flex-col items-center justify-center min-h-screen ">
            
            <h1 className="text-2xl font-bold text-green-700 mb-4">
              คำนวณความเสี่ยงของคุณ 💭
            </h1>
            <p className="text-lg text-gray-700 mb-/ text-center">
              คุณมีคะแนนความเสี่ยงอยู่ที่ {formData.point > 0 ? formData.point : "0"} คะแนน
            </p>
            {formData.point < 3 ? (
              <>
                <p className="text-lg text-gray-700 mb-6 text-center">
                  คุณมีความเสี่ยงต่ำ
                </p>
                <p className="text-lg text-gray-700 mb-6 text-center">
                  คุณมีพฤติกรรมที่ค่อนข้างปลอดภัย แต่ควรตรวจสอบสุขภาพเป็นประจำทุกปี 
                </p>
              </>
            ) : formData.point > 8 ? (
              <>
                <p className="text-lg text-gray-700 mb-6 text-center">
                  คุณมีความเสี่ยงสูง
                </p>
                <p className="text-lg text-gray-700 mb-6 text-center">
                  คุณมีพฤติกรรมที่เสี่ยงสูงต่อการติดโรคติดต่อทางเพศสัมพันธ์ แนะนำตรวจสุขภาพทันที และควรใช้ถุงยางอนามัยทุกครั้งที่มีเพศสัมพันธ์
                </p>
              </>
            ) : (
              <>
                <p className="text-lg text-gray-700 mb-6 text-center">
                  คุณมีความเสี่ยงปานกลาง
                </p>
                <p className="text-lg text-gray-700 mb-6 text-center">
                  คุณมีพฤติกรรมบางอย่างที่เสี่ยง ควรใช้ถุงยางอนามัยทุกครั้งที่มีเพศสัมพันธ์ และตรวจสุขภาพเป็นประจำทุก 6 เดือน
                </p>
              </>
            )}
            <img
              src={risk}
              alt="safe love"
              className="w-40 h-40"
            />

            <button
              onClick={() => handlewarning("yes")}
              className="mt-8 w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                {/* <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <User className="w-6 h-6 text-blue-600" />
                </div> */}
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 ">ต่อไป</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>

          </div>
          </div>
          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัย</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

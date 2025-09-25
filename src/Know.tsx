import React, { useState } from 'react';
import { BookMarked, ArrowRight, User, Heart } from 'lucide-react';

function Know() {
  const [currentPage, setCurrentPage] = useState<'welcome' | '1' | '2'| '3'| '4'| '5'| '6'| '7'| '8'| '9' >('welcome');

  const handleSelect = (page: '1' | '2'| '3'| '4'| '5'| '6'| '7'| '8'| '9' ) => {
    if (page === '1'){
      setCurrentPage('1');
    } else if (page === '2'){
      setCurrentPage('2');
    } else if (page === '3'){
      setCurrentPage('3');
    } else if (page === '4'){
      setCurrentPage('4');
    } else if (page === '5'){
      setCurrentPage('5');
    } else if (page === '6'){
      setCurrentPage('6');
    } else if (page === '7'){
      setCurrentPage('7');
    } else if (page === '8'){
      setCurrentPage('8');
    } else if (page === '9'){
      setCurrentPage('9');
    }
    
  };
  if (currentPage === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
              <BookMarked className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">มุมความรู้ทางเพศ</h1>
          </div>

          {/* Gender Selection Cards */}
          <div className="space-y-4">
            <button
              onClick={() => handleSelect('1')}
              className=" w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">โรคซิฟิลิส</h3>
                  <p className="text-gray-500">Syphilis</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handleSelect('2')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-pink-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">โรคหนองใน</h3>
                  <p className="text-gray-500">Gonorrhea</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handleSelect('3')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">โรคหูดหงอนไก่</h3>
                  <p className="text-gray-500">Genital Warts</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handleSelect('4')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-pink-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">โรคเอชไอวีและเอดส์</h3>
                  <p className="text-gray-500">HIV and AIDS</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handleSelect('5')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">โรคเริม</h3>
                  <p className="text-gray-500">Herpes</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handleSelect('6')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-pink-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">ยาคุมฉุกเฉิน และยาคุมกำเนิด</h3>
                  <p className="text-gray-500"></p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handleSelect('7')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">วิธีการใส่ถุงยางอนามัยที่ถูกต้อง และการเลือกขนาดที่เหมาะสม</h3>
                  <p className="text-gray-500"></p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handleSelect('8')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-pink-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">เทคนิคเพิ่มความรู้สึก (ความเสียว)</h3>
                  <p className="text-gray-500"></p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors" />
              </div>
            </button>

            <button
              onClick={() => handleSelect('9')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">สีตกขาวบอกโรค</h3>
                  <p className="text-gray-500"></p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </button>

          </div>
        </div>
      </div>
    );
  } else if (currentPage === '1') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 prose prose-lg">
        {/* Header */}
        <div className="grid grid-cols-3 gap-8">
            <div>
              <button
                onClick={() => setCurrentPage('welcome')}
                className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                  ย้อนกลับ
              </button>
            </div>
            <div >
                </div>
            <div></div>
          </div>
          <h1 className="text-4xl font-bold text-center mb-6 text-pink-700">
                  โรคซิฟิลิส (Syphilis)
                </h1>
                <h3 className="text-xl font-bold text-center mb-6 text-pink-700">รู้ทัน ป้องกัน และรักษา</h3>
            
        
        <img
          src="../image/1.jpg"
          alt="Syphilis medical concept"
          className="rounded-xl shadow-md mx-auto mb-8"
        />

        {/* Intro */}
        <p>
          <strong>โรคซิฟิลิส (Syphilis)</strong> เป็นโรคติดต่อทางเพศสัมพันธ์
          (STI) ที่เกิดจากเชื้อแบคทีเรีย{" "}
          <em>Treponema pallidum</em>. เชื้อเข้าสู่ร่างกายผ่านเยื่อเมือก
          เช่น ช่องคลอด ท่อปัสสาวะ ปาก เยื่อบุตา หรือทางผิวหนังที่มีแผล
        </p>

        {/* Transmission */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">
          ช่องทางการรับเชื้อ
        </h2>
        <ul>
          <li>การมีเพศสัมพันธ์ (ช่องคลอด ทวารหนัก ปาก)</li>
          <li>การสัมผัสโดยตรงกับรอยโรค</li>
          <li>การถ่ายทอดจากแม่สู่ลูกในครรภ์</li>
        </ul>

        {/* Stages */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">
          ระยะของโรคซิฟิลิส
        </h2>

        <h3 className="text-xl font-semibold mt-6">ระยะที่ 1 (Primary syphilis)</h3>
        <ul>
          <li>อาการเกิดภายใน 10–90 วันหลังได้รับเชื้อ</li>
          <li>มีแผลริมแข็ง (chancre) ไม่เจ็บ ที่อวัยวะเพศ ปาก หรือทวารหนัก</li>
          <li>ต่อมน้ำเหลืองโต</li>
          <li>อาการหายเองได้ภายใน 3–6 สัปดาห์</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">ระยะที่ 2 (Secondary syphilis)</h3>
        <ul>
          <li>เกิดหลังแผลริมแข็ง 4–10 สัปดาห์</li>
          <li>ผื่นขึ้นทั่วร่างกาย รวมถึงฝ่ามือและฝ่าเท้า</li>
          <li>อาจพบ condyloma lata (ตุ่มชื้น)</li>
          <li>มีไข้ เจ็บคอ ปวดศีรษะ</li>
          <li>เข้าสู่ระยะแฝงแต่เชื้อยังคงอยู่</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">ระยะแฝง (Latent syphilis)</h3>
        <ul>
          <li>ไม่มีอาการ</li>
          <li>Early latent (&lt;1 ปี): ยังแพร่เชื้อได้</li>
          <li>Late latent (&gt;1 ปี): มักไม่แพร่เชื้อ</li>
          <li>ประมาณ 24% อาจกลับมาเป็นซ้ำได้</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">ระยะที่ 3 (Tertiary syphilis)</h3>
        <ul>
          <li>เกิดขึ้นหลังติดเชื้อ 5–15 ปี</li>
          <li>ทำลายอวัยวะสำคัญ เช่น หัวใจและหลอดเลือด → Aortitis, aneurysm</li>
          <li>ระบบประสาท (Neurosyphilis) → dementia, tabes dorsalis, อัมพาต</li>
          <li>Gumma → ก้อนอักเสบที่ผิวหนังหรืออวัยวะ</li>
        </ul>

        {/* Prevention & Treatment */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">
          การป้องกันและการรักษา
        </h2>
        <ul>
          <li>ใช้ถุงยางอนามัยทุกครั้งเมื่อมีเพศสัมพันธ์</li>
          <li>ลดพฤติกรรมเสี่ยง เช่น การมีคู่นอนหลายคน</li>
          <li>ตรวจสุขภาพและคัดกรองเป็นประจำ โดยเฉพาะผู้ที่มีความเสี่ยง</li>
          <li>ตรวจหญิงตั้งครรภ์ทุกรายเพื่อป้องกันการถ่ายทอดเชื้อสู่ทารก</li>
          <li>
            การรักษาหลัก: <strong>Penicillin G</strong> (ใช้ได้ทุกระยะ)
          </li>
          <li>
            หากแพ้ Penicillin: ใช้ Doxycycline หรือ Ceftriaxone{" "}
            <br />
            <span className="font-semibold text-red-600">
              หญิงตั้งครรภ์ต้องใช้ Penicillin เท่านั้น
            </span>
          </li>
        </ul>

        {/* Footer */}
        <p className="text-center mt-12 text-gray-500 italic">
          ✦ ข้อมูลนี้จัดทำเพื่อการให้ความรู้ ไม่ใช่คำแนะนำทางการแพทย์
          หากสงสัยว่ามีอาการ ควรปรึกษาแพทย์ ✦
        </p>
      </div>
    </div>
    );
  } else if (currentPage === '2') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 prose prose-lg">
        {/* Header */}
        <div className="grid grid-cols-3 gap-8">
            <div>
              <button
                onClick={() => setCurrentPage('welcome')}
                className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                  ย้อนกลับ
              </button>
            </div>
            <div >
                </div>
            <div></div>
          </div>
          <h1 className="text-4xl font-bold text-center mb-6 text-pink-700">
                โรคหนองใน (Gonorrhea)
                </h1>
                <h3 className="text-xl font-bold text-center mb-6 text-pink-700">เข้าใจ อาการ การป้องกัน และการรักษา</h3>
            
        <img
          src="../image/2.jpg"
          alt="Gonorrhea medical illustration"
          className="rounded-xl shadow-md mx-auto mb-8"
        />

        {/* Intro */}
        <p>
          <strong>โรคหนองใน (Gonorrhea)</strong> เป็น{" "}
          <em>โรคติดต่อทางเพศสัมพันธ์ (STI)</em> ที่เกิดจากเชื้อแบคทีเรีย{" "}
          <em>Neisseria gonorrhoeae</em>. โรคนี้สามารถส่งผลกระทบต่อทั้งชายและหญิง
          หากไม่ได้รับการรักษาอาจนำไปสู่ภาวะแทรกซ้อนรุนแรง
        </p>

        {/* Transmission */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">
          การติดต่อ
        </h2>
        <ul>
          <li>
            ผ่านการมีเพศสัมพันธ์โดยตรงกับผู้ติดเชื้อ ทั้งทางช่องคลอด ทวารหนัก
            หรือทางปาก
          </li>
          <li>
            การสัมผัสกับของเหลวที่มีเชื้อ เช่น การสัมผัสหนอง ก็สามารถทำให้ติดเชื้อได้
          </li>
        </ul>

        {/* Incubation & Symptoms */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">
          ระยะการฟักตัวและอาการ
        </h2>

        <h3 className="text-xl font-semibold mt-6">ระยะฟักตัว</h3>
        <p>ประมาณ 1–14 วันหลังได้รับเชื้อ โดยยังไม่ปรากฏอาการ</p>

        <h3 className="text-xl font-semibold mt-6">ระยะเริ่มต้น</h3>
        <ul>
          <li>
            <strong>เพศชาย:</strong> ปวดแสบขัดเวลาปัสสาวะ มีหนองไหลออกจากท่อปัสสาวะ
          </li>
          <li>
            <strong>เพศหญิง:</strong> ปัสสาวะแสบขัด มีตกขาวมากผิดปกติ มีกลิ่นเหม็น
            หรือมีหนองไหลออกจากปากมดลูก
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">ระยะลุกลาม/ภาวะแทรกซ้อน</h3>
        <ul>
          <li>ชาย: อัณฑะอักเสบ</li>
          <li>
            หญิง: ภาวะอุ้งเชิงกรานอักเสบ (PID), ท่อนำไข่อุดตัน, เป็นหมัน,
            ตั้งครรภ์นอกมดลูก
          </li>
          <li>
            เชื้ออาจแพร่ไปสู่กระแสเลือด → ทำให้เกิดข้ออักเสบ
            หรือลุกลามไปยังอวัยวะอื่น เช่น ตับ หรือลิ้นหัวใจ
          </li>
        </ul>

        {/* Treatment */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">การรักษา</h2>
        <ul>
          <li>รักษาโดยการฉีดยาปฏิชีวนะ</li>
          <li>หากอาการไม่ดีขึ้น ควรกลับมาพบแพทย์ทันที เพราะอาจเป็นเชื้อดื้อยา</li>
          <li>
            งดเพศสัมพันธ์อย่างน้อย 7 วันหลังการรักษา เพื่อป้องกันการแพร่เชื้อ
          </li>
          <li>
            ควรไปตรวจสุขภาพติดตามหลังการรักษา และตรวจคัดกรองซ้ำภายใน 3 เดือน
            เพื่อประเมินโรคติดต่อทางเพศสัมพันธ์อื่น ๆ
          </li>
        </ul>

        {/* Prevention */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">การป้องกัน</h2>
        <ul>
          <li>สวมถุงยางอนามัยทุกครั้งเมื่อมีเพศสัมพันธ์</li>
          <li>
            หลีกเลี่ยงเพศสัมพันธ์หากมีตกขาว หนอง หรือปัสสาวะแสบขัด
          </li>
          <li>
            หากมีประวัติเสี่ยง ควรตรวจคัดกรองโรคติดต่อทางเพศสัมพันธ์
            แม้ไม่มีอาการ
          </li>
        </ul>

        {/* Note */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">ข้อสังเกต</h2>
        <p>
          โรคหนองในมี 2 ประเภทหลัก คือ:
          <br />
          <strong>หนองในแท้:</strong> เกิดจากเชื้อ{" "}
          <em>Neisseria gonorrhoeae</em>
          <br />
          <strong>หนองในเทียม:</strong> เกิดจากเชื้ออื่น เช่น{" "}
          <em>Chlamydia trachomatis</em>
        </p>
        <p>
          หนองในเทียมมักมีอาการไม่ชัดเจนเท่าหนองในแท้
          ดังนั้นหากสงสัยควรรีบพบแพทย์เพื่อการตรวจวินิจฉัย
        </p>

        {/* Footer */}
        <p className="text-center mt-12 text-gray-500 italic">
          ✦ ข้อมูลนี้จัดทำเพื่อการให้ความรู้ ไม่ใช่คำแนะนำทางการแพทย์
          หากสงสัยว่ามีอาการ ควรปรึกษาแพทย์ ✦
        </p>
      </div>
    </div>
    );
  } else if (currentPage === '3') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 prose prose-lg">
        {/* Header */}
        <div className="grid grid-cols-3 gap-8">
            <div>
              <button
                onClick={() => setCurrentPage('welcome')}
                className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                  ย้อนกลับ
              </button>
            </div>
            <div >
                </div>
            <div></div>
          </div>
          <h1 className="text-4xl font-bold text-center mb-6 text-pink-700">
                โรคหูดหงอนไก่ (Genital Warts)
                </h1>
                <h3 className="text-xl font-bold text-center mb-6 text-pink-700">รู้จัก อาการ การป้องกัน และการรักษา</h3>
            
        <img
          src="../image/3.jpg"
          alt="HPV virus medical concept"
          className="rounded-xl shadow-md mx-auto mb-8"
        />

        {/* Intro */}
        <p>
          <strong>โรคหูดหงอนไก่ (Genital warts / Condyloma acuminata)</strong>{" "}
          เป็นโรคติดต่อทางเพศสัมพันธ์ (STI) ที่เกิดจากการติดเชื้อ{" "}
          <em>Human Papillomavirus (HPV)</em> โดยเฉพาะสายพันธุ์ความเสี่ยงต่ำ{" "}
          <strong>HPV 6 และ 11</strong> ซึ่งเป็นสาเหตุของหูดประมาณ 90%.
        </p>
        <p>
          อาการมักปรากฏเป็นติ่งหรือก้อนบริเวณอวัยวะเพศ ทวารหนัก หรือช่องปาก
          การรักษาทำได้โดยการตัด/ทำลายหรือยาทา
          แต่การรักษาไม่สามารถกำจัดเชื้อ HPV ออกจากร่างกายได้อย่างถาวร
          (มีโอกาสกลับมาเป็นซ้ำได้)
        </p>

        {/* Location */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">ตำแหน่งที่พบบ่อย</h2>
        <ul>
          <li>
            <strong>ผู้หญิง:</strong> ปากช่องคลอด ผนังช่องคลอด ปากมดลูก
            ทวารหนัก และบริเวณฝีเย็บ
          </li>
          <li>
            <strong>ผู้ชาย:</strong> ใต้หนังหุ้มปลายอวัยวะเพศ เส้นสองสลึง
            รูเปิดท่อปัสสาวะ และรอบทวารหนัก (โดยเฉพาะผู้มีเพศสัมพันธ์ทางทวารหนัก)
          </li>
        </ul>

        {/* Risk Factors */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">ปัจจัยเสี่ยง</h2>
        <ul>
          <li>มีคู่นอนหลายคน</li>
          <li>มีเพศสัมพันธ์ตั้งแต่อายุน้อย</li>
          <li>พฤติกรรมรักร่วมเพศ</li>
          <li>คู่นอนมีการติดเชื้อหูดหงอนไก่</li>
        </ul>

        {/* Symptoms by time */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">อาการตามระยะเวลา</h2>

        <h3 className="text-xl font-semibold mt-6">ช่วง 0 – 7 วันแรก</h3>
        <ul>
          <li>ยังไม่แสดงอาการ</li>
          <li>บางคนอาจมีแผลหรือระคายเคืองเล็กน้อย</li>
          <li>ตรวจหา HPV ยังไม่ได้ แต่ควรตรวจโรคติดต่อทางเพศสัมพันธ์อื่นที่ฟักตัวสั้นกว่า เช่น หนองใน เริม ซิฟิลิส</li>
          <li>ควรใช้ถุงยางทุกครั้งเมื่อมีเพศสัมพันธ์</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">ช่วง 2 สัปดาห์ – 3 เดือน</h3>
        <ul>
          <li>เริ่มเห็นตุ่มเล็ก ๆ สีเนื้อหรือชมพู บริเวณอวัยวะเพศหรือทวารหนัก</li>
          <li>ไม่เจ็บ ไม่คัน อาจรวมกันเป็นกลุ่มเล็ก ๆ</li>
          <li>อาจพัฒนาเป็นติ่ง/ดอกกะหล่ำเล็ก ๆ คัน แสบ หรือเลือดออก</li>
          <li>ถ้าอยู่ภายใน (ปากมดลูก / ทวารหนัก / ท่อปัสสาวะ) → อาจไม่มีอาการชัดเจน แต่มีเลือดออกผิดปกติ ปัสสาวะติดขัด หรือเจ็บขณะมีเพศสัมพันธ์</li>
        </ul>

        {/* What to do */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">ควรทำอย่างไรเมื่อสงสัยติดเชื้อ</h2>
        <ul>
          <li>หากพบตุ่มผิดปกติ → ไปพบแพทย์ผิวหนัง สูตินรีแพทย์ หรือคลินิกกามโรค</li>
          <li>งดเพศสัมพันธ์แบบไม่ป้องกัน</li>
          <li>รักษาด้วยการจี้เย็น จี้ไฟฟ้า เลเซอร์ หรือยาทาเฉพาะที่</li>
          <li>แจ้งคู่เพศสัมพันธ์ให้มาตรวจ</li>
          <li>ผู้หญิงควรตรวจ Pap smear หรือ HPV test เพื่อตรวจความเสี่ยงมะเร็งปากมดลูก</li>
        </ul>

        {/* Footer */}
        <p className="text-center mt-12 text-gray-500 italic">
          ✦ โรคหูดหงอนไก่รักษาได้และป้องกันได้ แต่ไม่ควรละเลยการตรวจสุขภาพ
          หากสงสัยควรพบแพทย์เพื่อรับการวินิจฉัยที่ถูกต้อง ✦
        </p>
      </div>
    </div>
    );
  } else if (currentPage === '4') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 prose prose-lg">
        {/* Header */}
        <div className="grid grid-cols-3 gap-8">
            <div>
              <button
                onClick={() => setCurrentPage('welcome')}
                className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                  ย้อนกลับ
              </button>
            </div>
            <div >
                </div>
            <div></div>
          </div>
          <h1 className="text-4xl font-bold text-center mb-6 text-pink-700">
                โรคเอชไอวี (HIV) และเอดส์ (AIDS)
                </h1>
                <h3 className="text-xl font-bold text-center mb-6 text-pink-700">เข้าใจการติดต่อ ป้องกัน และการรักษา</h3>
            
        <img
          src="../image/4.jpg"
          alt="HIV awareness ribbon"
          className="rounded-xl shadow-md mx-auto mb-8"
        />

        {/* Intro */}
        <p>
          <strong>HIV</strong> (Human Immunodeficiency Virus) คือเชื้อไวรัสที่ทำลาย
          <em>ระบบภูมิคุ้มกันของร่างกาย</em>{" "}
          ทำให้ติดเชื้อและป่วยจากโรคต่าง ๆ ได้ง่ายขึ้น หากไม่ได้รับการรักษา
          อาจพัฒนาเข้าสู่ระยะ <strong>เอดส์ (AIDS)</strong>.
        </p>

        {/* Transmission */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">
          การติดต่อของ HIV
        </h2>
        <ul>
          <li>การมีเพศสัมพันธ์โดยไม่ป้องกัน (ช่องคลอด, ทวารหนัก, ช่องปาก)</li>
          <li>การใช้เข็มฉีดยาร่วมกัน</li>
          <li>การถ่ายเลือดหรือปลูกถ่ายอวัยวะที่ไม่ได้ตรวจเชื้อ</li>
          <li>การถ่ายทอดจากแม่สู่ลูกในครรภ์ ระหว่างคลอด หรือให้นมบุตร</li>
        </ul>
        <p className="text-red-600 font-semibold mt-4">
          ❌ ไม่ติดต่อจาก: การกินอยู่ร่วมกัน, กอด, จูบ, หรือใช้ของใช้ทั่วไป
        </p>

        {/* Symptoms */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">
          อาการของผู้ติดเชื้อ HIV
        </h2>
        <h3 className="text-xl font-semibold mt-6">ระยะแรก (Acute HIV)</h3>
        <ul>
          <li>ไข้สูง</li>
          <li>ปวดศีรษะ เจ็บคอ</li>
          <li>ผื่นตามตัว</li>
          <li>ต่อมน้ำเหลืองโต</li>
          <li>อาการคล้ายไข้หวัดใหญ่</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">ระยะติดเชื้อเรื้อรัง</h3>
        <p>
          ส่วนใหญ่มักไม่มีอาการชัดเจน แต่เชื้อยังคงอยู่และสามารถแพร่ต่อได้
        </p>

        <h3 className="text-xl font-semibold mt-6">ระยะเอดส์ (AIDS)</h3>
        <p>
          เมื่อภูมิคุ้มกันอ่อนแอมาก ทำให้ร่างกายติดเชื้อง่าย เช่น วัณโรค
          ปอดบวม เชื้อรา หรือมะเร็งบางชนิด
        </p>

        {/* Prevention */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">
          การป้องกันโรคเอดส์
        </h2>
        <ul>
          <li>ใช้ถุงยางอนามัยทุกครั้งเมื่อมีเพศสัมพันธ์</li>
          <li>ไม่ใช้เข็มฉีดยาร่วมกับผู้อื่น</li>
          <li>
            หากมีความเสี่ยง ควรรับยาต้านไวรัสฉุกเฉิน (<strong>PEP</strong>)
            ภายใน 72 ชั่วโมง
          </li>
          <li>
            หญิงตั้งครรภ์ที่ติดเชื้อ HIV ควรรับการรักษาเพื่อลดโอกาสแพร่เชื้อสู่ลูก
          </li>
        </ul>

        {/* Treatment */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">
          การตรวจและการรักษา
        </h2>
        <ul>
          <li>
            ตรวจเลือดเพื่อตรวจหาเชื้อ HIV (และควรตรวจซ้ำหากมีพฤติกรรมเสี่ยง)
          </li>
          <li>
            ปัจจุบันยังไม่มียาที่ทำให้หายขาด
            แต่การใช้ยาต้านไวรัส{" "}
            <strong>ART (Antiretroviral Therapy)</strong>{" "}
            สามารถกดการทำงานของเชื้อได้
          </li>
          <li>หากรับการรักษาอย่างต่อเนื่อง ผู้ติดเชื้อสามารถมีชีวิตใกล้เคียงปกติ</li>
        </ul>

        {/* Footer */}
        <p className="text-center mt-12 text-gray-500 italic">
          ✦ HIV ไม่ใช่สิ่งที่น่ากลัวหากได้รับการตรวจและรักษาอย่างถูกต้อง
          ป้องกันได้ รักษาได้ ใช้ชีวิตได้ ✦
        </p>
      </div>
    </div>
    );
  } else if (currentPage === '5') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 prose prose-lg">
        {/* Header */}
        <div className="grid grid-cols-3 gap-8">
            <div>
              <button
                onClick={() => setCurrentPage('welcome')}
                className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                  ย้อนกลับ
              </button>
            </div>
            <div >
                </div>
            <div></div>
          </div>
          <h1 className="text-4xl font-bold text-center mb-6 text-pink-700">
                โรคเริม (Herpes)
                </h1>
                <h3 className="text-xl font-bold text-center mb-6 text-pink-700">อาการ การกลับมาเป็นซ้ำ และการรักษา</h3>
            
        <img
          src="../image/5.jpg"
          alt="Herpes virus medical concept"
          className="rounded-xl shadow-md mx-auto mb-8"
        />

        {/* Intro */}
        <p>
          <strong>โรคเริม (Herpes)</strong> เป็นโรคติดเชื้อไวรัสที่พบได้บ่อย
          สามารถเกิดได้หลายตำแหน่ง เช่น ริมฝีปาก จมูก เยื่อบุช่องปาก ดวงตา
          อวัยวะเพศชายและหญิง โดยเริมที่อวัยวะเพศมักมีความรุนแรงและส่งผลกระทบ
          ต่อคุณภาพชีวิตมากที่สุด
        </p>

        {/* Genital Herpes */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">
          เริมที่อวัยวะเพศหญิง
        </h2>
        <p>
          อาการมักรุนแรงกว่าในผู้ชาย อาจเกิดทั้งบริเวณภายนอกและลามเข้าสู่ช่องคลอด
          จนถึงปากมดลูกและคอมดลูก ซึ่งในระยะยาวอาจเพิ่มความเสี่ยงต่อ{" "}
          <strong>มะเร็งปากมดลูก</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-10 text-blue-700">
          เริมที่อวัยวะเพศชาย
        </h2>
        <p>
          มักเกิดเป็นตุ่มกลุ่มเล็ก ๆ (5–10 ตุ่ม) บริเวณขอบหนังหุ้มปลายองคชาติ
          หรือกระจายตามผิวหนังองคชาติ หากรุนแรงเชื้ออาจลามเข้าสู่ท่อปัสสาวะ
          ทำให้เกิดการอักเสบ ปัสสาวะขัด เจ็บแสบ และอาจมีหนองเล็กน้อย
        </p>

        {/* Symptoms */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">
          อาการของโรคเริม
        </h2>

        <h3 className="text-xl font-semibold mt-6">การติดเชื้อครั้งแรก</h3>
        <ul>
          <li>อาการรุนแรงและอยู่นานกว่าการเป็นซ้ำ</li>
          <li>เริ่มจากระคายเคือง ปื้นแดง → เกิดตุ่มน้ำใสเป็นกลุ่ม</li>
          <li>ตุ่มแตกเป็นแผล ทำให้เจ็บแสบมาก</li>
          <li>อาจมีไข้ต่ำ ๆ หรืออาการทางระบบประสาท เช่น ปวดร้าวตามขา ชาบริเวณก้นกบ</li>
          <li>แผลหายภายใน 2–3 สัปดาห์</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">ระยะสงบ (Latent phase)</h3>
        <p>
          เชื้อยังคงอยู่ในร่างกาย แต่ไม่แสดงอาการ
          อย่างไรก็ตามเชื้ออาจแบ่งตัวและแพร่เชื้อต่อได้
          โดยเฉพาะเริมที่อวัยวะเพศ แม้ไม่มีผื่นก็ตาม
        </p>

        <h3 className="text-xl font-semibold mt-6">การกลับมาเป็นซ้ำ</h3>
        <ul>
          <li>อาการน้อยกว่าและพื้นที่เล็กกว่าครั้งแรก</li>
          <li>มักเกิดใกล้บริเวณเดิม</li>
          <li>ไม่ค่อยมีไข้ แต่สามารถกลับมาเป็นซ้ำได้บ่อย โดยเฉพาะที่อวัยวะเพศ</li>
        </ul>

        {/* Treatment */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">
          วิธีรักษาโรคเริม
        </h2>
        <ul>
          <li>แพทย์จะให้ยาต้านไวรัสเพื่อบรรเทาและลดความรุนแรงของอาการ</li>
          <li>ไม่ควรซื้อยามารับประทานเอง</li>
          <li>การรักษาไม่สามารถกำจัดเชื้อไวรัสออกจากร่างกายได้ แต่ช่วยควบคุมอาการและลดการแพร่เชื้อ</li>
        </ul>

        {/* Footer */}
        <p className="text-center mt-12 text-gray-500 italic">
          ✦ เริมเป็นโรคที่รักษาอาการได้ แต่เชื้อไวรัสยังคงอยู่ในร่างกาย
          หากสงสัยติดเชื้อ ควรพบแพทย์เพื่อรับการรักษาที่ถูกต้อง ✦
        </p>
      </div>
    </div>
    );
  } else if (currentPage === '6') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 prose prose-lg">
        {/* Header */}
        <div className="grid grid-cols-3 gap-8">
            <div>
              <button
                onClick={() => setCurrentPage('welcome')}
                className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                  ย้อนกลับ
              </button>
            </div>
            <div >
                </div>
            <div></div>
          </div>
          <h1 className="text-4xl font-bold text-center mb-6 text-pink-700">
                ยาคุมฉุกเฉิน และยาคุมกำเนิด
                </h1>
                <h3 className="text-xl font-bold text-center mb-6 text-pink-700">วิธีใช้ ผลข้างเคียง และข้อควรรู้</h3>
            
        <img
          src="../image/6.jpg"
          alt="Contraceptive pills"
          className="rounded-xl shadow-md mx-auto mb-8"
        />

        {/* Emergency contraceptive */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">
          ยาคุมฉุกเฉิน
        </h2>
        <p>
          ยาคุมฉุกเฉินควรกินให้เร็วที่สุดหลังมีเพศสัมพันธ์ที่ไม่ได้ป้องกัน
          ประสิทธิภาพจะลดลงตามเวลา:
        </p>
        <ul>
          <li>กินภายใน 24 ชั่วโมง → ป้องกันได้ประมาณ 85%</li>
          <li>กินภายใน 72 ชั่วโมง → ป้องกันได้ประมาณ 75%</li>
        </ul>
        <p className="text-red-600 font-semibold">
          ⚠️ ไม่ควรกินยาคุมฉุกเฉินเกิน 4 เม็ด (2 กล่อง) ต่อเดือน
        </p>

        <h3 className="text-xl font-semibold mt-6">วิธีกิน</h3>
        <ul>
          <li>
            <strong>เม็ดที่ 1:</strong> กินทันทีหลังมีเพศสัมพันธ์ (ไม่เกิน 72 ชั่วโมง)
          </li>
          <li>
            <strong>เม็ดที่ 2:</strong> กินหลังจากเม็ดแรกไม่เกิน 12 ชั่วโมง
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">ผลข้างเคียง</h3>
        <ul>
          <li>ประจำเดือนมาไม่ปกติ</li>
          <li>เจ็บคัดเต้านม</li>
          <li>ปวดท้อง ปวดหัว</li>
          <li>คลื่นไส้ อาเจียน</li>
        </ul>

        {/* Regular contraceptive pills */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">
          ยาคุมกำเนิด (แบบเม็ด)
        </h2>
        <h3 className="text-xl font-semibold mt-6">วิธีกินให้ได้ผล</h3>
        <ul>
          <li>เริ่มกินวันแรกที่มีประจำเดือน (ไม่เกินวันที่ 5 ของรอบเดือน)</li>
          <li>กินตามลำดับลูกศรบนแผงยา</li>
          <li>กินเวลาเดียวกันทุกวัน</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">รูปแบบของยาคุม</h3>
        <ul>
          <li>
            <strong>แบบ 21 เม็ด (ฮอร์โมนทั้งหมด):</strong> กิน 21 วัน →
            หยุด 7 วัน → เริ่มแผงใหม่ (ประจำเดือนมาช่วงหยุดยา)
          </li>
          <li>
            <strong>แบบ 28 เม็ด (21 เม็ดฮอร์โมน + 7 เม็ดแป้ง):</strong>{" "}
            กินต่อเนื่องทุกวันจนหมดแผง → เริ่มแผงใหม่ทันที
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">ถ้าลืมกินยา</h3>
        <ul>
          <li>
            <strong>ลืม 1 เม็ด:</strong> กินทันทีที่นึกได้
            และกินเม็ดถัดไปตามเวลาเดิม
          </li>
          <li>
            <strong>ลืม 2 เม็ด:</strong> วันแรก → กิน 1 เม็ดทันที + 1 เม็ดก่อนนอน
            <br />
            วันถัดมา → กิน 1 เม็ดหลังอาหารเช้า แล้วกลับมากินตามปกติ
          </li>
          <li>
            <strong>ลืม 3 เม็ด:</strong> ทิ้งแผงเดิม และเริ่มแผงใหม่ทันที +
            ใช้วิธีคุมกำเนิดอื่นร่วมด้วย
          </li>
        </ul>

        {/* Footer */}
        <p className="text-center mt-12 text-gray-500 italic">
          ✦ ยาคุมฉุกเฉินเป็นเพียงวิธีสำรอง ไม่ควรใช้เป็นประจำ
          การกินยาคุมกำเนิดสม่ำเสมอและถูกวิธี เป็นการป้องกันที่มีประสิทธิภาพกว่า ✦
        </p>
      </div>
    </div>
    );
  } else if (currentPage === '7') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 prose prose-lg">
        {/* Header */}
        <div className="grid grid-cols-3 gap-8">
            <div>
              <button
                onClick={() => setCurrentPage('welcome')}
                className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                  ย้อนกลับ
              </button>
            </div>
            <div >
                
            </div>
            <div></div>
          </div>
          <h1 className="text-2xl font-bold text-center mb-6 text-pink-700">
                วิธีการใส่ถุงยางอนามัยที่ถูกต้อง และการเลือกขนาดที่เหมาะสม
                </h1>

        <img
          src="../image/7.jpg"
          alt="Condom awareness"
          className="rounded-xl shadow-md mx-auto mb-8"
        />

        {/* Intro */}
        <p>
          <strong>ถุงยางอนามัย</strong> เป็นวิธีคุมกำเนิดและป้องกันโรคติดต่อทางเพศสัมพันธ์ที่ง่ายและมีประสิทธิภาพ
          แต่หลายคนอาจใส่ผิดวิธี ทำให้ประสิทธิภาพลดลง
          มาดูกันว่าควรใส่อย่างไรให้ถูกต้อง และเลือกขนาดที่เหมาะสมได้อย่างไร
        </p>

        {/* How to wear */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">
          วิธีการใส่ถุงยางอนามัยที่ถูกต้อง
        </h2>
        <ol>
          <li>
            ฉีกซองถุงยางออกอย่างระมัดระวัง เลือกด้านที่ถูกต้อง
            (ด้านที่มีกระเปาะไว้ด้านนอก) จากนั้นบีบบริเวณหัวถุงยางเพื่อไล่อากาศ
          </li>
          <li>
            สวมขณะอวัยวะเพศแข็งตัวเต็มที่ แล้วรูดถุงยางลงมาจนสุดโคน
            เพื่อป้องกันการหลุดระหว่างมีเพศสัมพันธ์
          </li>
          <li>
            ตรวจสอบว่าถุงยางไม่ชำรุด ไม่มีรอยรั่วหรือฉีกขาด
          </li>
          <li>
            เมื่อเสร็จกิจ ควรถอดถุงยางขณะอวัยวะเพศยังแข็งตัว
            โดยจับที่โคนถุงยางดึงออกอย่างระมัดระวัง จากนั้นห่อด้วยกระดาษชำระแล้วทิ้ง
          </li>
          <li>
            หากจะมีเพศสัมพันธ์ในครั้งต่อไป ต้องเปลี่ยนถุงยางใหม่ทุกครั้ง
            ไม่ควรนำอันเดิมกลับมาใช้
          </li>
        </ol>

        {/* Choosing the size */}
        <h2 className="text-2xl font-semibold mt-10 text-blue-700">
          วิธีเลือกไซส์ถุงยางที่เหมาะสม
        </h2>
        <p>
          การเลือกขนาดที่พอดีจะช่วยป้องกันการหลุดหรือแตกขณะใช้งาน
          โดยวิธีวัดมีดังนี้:
        </p>
        <ul>
          <li>
            วัดเส้นรอบวงของอวัยวะเพศชายขณะแข็งตัวเต็มที่
          </li>
          <li>
            นำค่าที่ได้มาหารด้วย 2 → จะได้ <strong>เส้นผ่านศูนย์กลางที่เหมาะสม</strong>
          </li>
          <li>
            ตัวอย่าง: หากวัดได้ 110 มม. → หาร 2 = 55 มม.
            ในท้องตลาดอาจมีถุงยางขนาด 56 มม. ให้เลือกใกล้เคียงที่สุด
          </li>
        </ul>

        {/* Footer */}
        <p className="text-center mt-12 text-gray-500 italic">
          ✦ การใช้ถุงยางอนามัยอย่างถูกวิธีและเลือกขนาดที่เหมาะสม
          คือกุญแจสำคัญในการป้องกันโรคติดต่อทางเพศสัมพันธ์และการตั้งครรภ์ไม่พร้อม ✦
        </p>
      </div>
    </div>
    );
  } else if (currentPage === '8') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
      <article className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 prose prose-lg">
        {/* Header */}
        <div className="grid grid-cols-3 gap-8">
            <div>
              <button
                onClick={() => setCurrentPage('welcome')}
                className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                  ย้อนกลับ
              </button>
            </div>
            <div >
                </div>
            <div></div>
          </div>
        <header className="text-center">
          <h1 className="text-4xl font-bold text-center mb-6 text-pink-700">
                เทคนิคเพิ่มความรู้สึก (ความเสียว)
                </h1>
                <h3 className="text-xl font-bold text-center mb-6 text-pink-700">ขณะมีเพศสัมพันธ์ — แบบให้ความรู้และปลอดภัย</h3>
          <p className="text-sm text-gray-500">
            คู่มือนุ่ม ๆ ที่เน้นการสื่อสาร ความยินยอม เทคนิคเบื้องต้น และการดูแลหลังทำกิจกรรม
          </p>
          <img
            src="../image/8.jpg"
            alt="Couple intimacy gentle touch"
            className="rounded-xl shadow-md mx-auto mt-6"
          />
        </header>

        {/* Intro */}
        <section>
          <h2 className="text-2xl font-semibold mt-6 text-blue-700">นำเข้า — ทำไมการเล้าโลมสำคัญ</h2>
          <p>
            การเล้าโลม (foreplay) คือการสร้างความเชื่อมโยงทางร่างกายและอารมณ์ระหว่างคู่รัก
            ช่วยทำให้เกิดการกระตุ้นทางเพศ และเตรียมร่างกายให้พร้อมก่อนมีเพศสัมพันธ์
            นอกจากจะเพิ่มความสุขแล้ว การเล้าโลมที่ดียังช่วยลดความเสียดสีและเพิ่มความปลอดภัยได้ด้วย
          </p>
        </section>

        {/* Consent & Communication */}
        <section>
          <h2 className="text-2xl font-semibold mt-6 text-blue-700">พื้นฐานสำคัญ: ความยินยอม และการสื่อสาร</h2>
          <ul>
            <li><strong>ขอความยินยอมเสมอ:</strong> ตรวจสอบว่าคู่ของคุณเต็มใจก่อนเริ่มและขณะทำกิจกรรม</li>
            <li><strong>สื่อสารแบบเปิด:</strong> ถามว่าอยากให้ทำอย่างไร หลีกเลี่ยงการคาดเดา</li>
            <li><strong>เซฟเวิร์ด/สัญญาณหยุด:</strong> หากต้องการวิธีหยุดชั่วคราว ใช้คำหรือสัญญาณที่ตกลงกัน</li>
            <li><strong>เคารพขอบเขต:</strong> หากคู่ไม่สบายใจหรือขอหยุด ให้หยุดทันทีโดยไม่ตัดสิน</li>
          </ul>
        </section>

        {/* Techniques (non-graphic) */}
        <section>
          <h2 className="text-2xl font-semibold mt-6 text-blue-700">เทคนิคเล้าโลม — วิธีที่สุภาพและได้ผล</h2>

          <h3 className="text-xl font-semibold mt-4">1) เริ่มจากการเชื่อมโยงอารมณ์</h3>
          <p>
            การจูบ การสบตา พูดคำอ่อนโยน หรือลูบหลังอย่างช้า ๆ ช่วยสร้างบรรยากาศปลอดภัยและเปิดรับการสัมผัสต่อไป
          </p>

          <h3 className="text-xl font-semibold mt-4">2) การสัมผัสทั่วร่างกาย (non-genital touch)</h3>
          <p>
            เริ่มจากบริเวณที่ไม่ใช่อวัยวะเพศ เช่น คอ บ่าหรือหน้าท้อง เพื่อสำรวจว่าคู่ชอบการสัมผัสแบบไหน
            การนวดหรือการลูบไล้ช่วยให้ผิวอุ่นและผ่อนคลายก่อนกระตุ้นบริเวณไวต่อความรู้สึก
          </p>

          <h3 className="text-xl font-semibold mt-4">3) กระตุ้นบริเวณที่ตอบสนองได้ง่าย (erogenous zones)</h3>
          <p>
            บริเวณอย่างปาก หน้าอก หน้าท้อง ต้นขา และโคนต้นขามีความไวแตกต่างกันในแต่ละคน
            ลองสัมผัสเบา ๆ เพื่อค้นหาจุดที่คู่รู้สึกดี แล้วปรับแรงมือและจังหวะตามการตอบสนอง
          </p>

          <h3 className="text-xl font-semibold mt-4">4) การกระตุ้นเพศภายนอกและภายในแบบระมัดระวัง</h3>
          <p>
            การกระตุ้นบริเวณเพศภายนอก (เช่น บริเวณอวัยวะสืบพันธุ์ภายนอก) สามารถทำได้โดยการลูบไล้หรือกดเบา ๆ
            การกระตุ้นภายใน (เช่น การใช้นิ้วสัมผัสช่องคลอดหรือบริเวณที่ตอบสนองภายใน) ควรทำอย่างอ่อนโยน
            และต้องมีการหล่อลื่นเพียงพอ พร้อมถามความรู้สึกคู่เสมอ — หากมีความเจ็บต้องหยุดทันที
          </p>

          <h3 className="text-xl font-semibold mt-4">5) ใช้สารหล่อลื่น (lubricant)</h3>
          <p>
            สารหล่อลื่นช่วยลดการเสียดสี เพิ่มความสบาย และป้องกันการถลอก ควรเลือกชนิดที่เหมาะสมกับกิจกรรม
            (น้ำเป็นตัวเลือกที่ปลอดภัยและใช้ได้กับถุงยาง ส่วนซิลิโคนมีความลื่นคงทนกว่า)
          </p>

          <h3 className="text-xl font-semibold mt-4">6) จังหวะและความหลากหลาย</h3>
          <p>
            เปลี่ยนจังหวะ ระยะ กดเบา-แรง มากขึ้น-น้อยลง เพื่อค้นหาสิ่งที่คู่ชอบ บางครั้งการชะลอหรือหยุดชั่วคราวจะเพิ่มความตื่นเต้นได้
          </p>

          <h3 className="text-xl font-semibold mt-4">7) การใช้ปากและออรัล (ในกรอบการยินยอม)</h3>
          <p>
            หากทั้งสองฝ่ายยินยอม ออรัลสามารถเป็นส่วนหนึ่งของการเล้าโลมได้ แต่ต้องคำนึงเรื่องความสะอาดและความปลอดภัยทางเพศ
            ใช้การสื่อสารเพื่อปรับแรงและจังหวะอย่างต่อเนื่อง
          </p>
        </section>

        {/* Practical tips */}
        <section>
          <h2 className="text-2xl font-semibold mt-6 text-blue-700">เคล็ดลับเชิงปฏิบัติและความปลอดภัย</h2>
          <ul>
            <li><strong>ล้างมือและตัดเล็บให้เรียบร้อย</strong> ก่อนสัมผัสบริเวณที่บอบบาง</li>
            <li><strong>ใช้ถุงยางหรือบาเรียร์</strong> เมื่อต้องการลดความเสี่ยงการติดเชื้อทางเพศสัมพันธ์</li>
            <li><strong>หลีกเลี่ยงการสัมผัสบริเวณที่เป็นแผลหรือมีการติดเชื้อ</strong> เพื่อป้องกันการแพร่เชื้อ</li>
            <li><strong>สื่อสารหลังกิจกรรม (aftercare)</strong> เช่น กอด พูดคุย หรือถามความรู้สึกเพื่อสร้างความมั่นใจและความใกล้ชิด</li>
            <li><strong>เคารพความต้องการในการหยุด</strong> — หากฝ่ายใดไม่สบายใจ ต้องยอมรับและปรับตาม</li>
          </ul>
        </section>

        {/* For different bodies */}
        <section>
          <h2 className="text-2xl font-semibold mt-6 text-blue-700">สิ่งที่ควรคำนึงสำหรับเพศต่าง ๆ</h2>
          <p>
            ทั้งผู้ชายและผู้หญิงมีความแตกต่างทางกายภาพและการตอบสนอง — สำรวจและพูดคุยเพื่อหาวิธีที่เหมาะสมกับแต่ละคน
            ไม่มีสูตรเดียวที่ถูกสำหรับทุกคน ความใส่ใจและการทดลองอย่างปลอดภัยคือคำตอบ
          </p>
        </section>

        {/* Closing */}
        <footer className="mt-8">
          <p className="text-gray-600 italic text-center">
            ✦ คู่มือนี้เป็นข้อมูลทั่วไปเพื่อการเรียนรู้และเพิ่มคุณภาพความสัมพันธ์ ไม่ใช่คำแนะนำเชิงการแพทย์หรือคู่มือทางเพศเชิงลามก
            หากมีปัญหาด้านสุขภาพทางเพศหรือการติดเชื้อ ควรปรึกษาแพทย์หรือคลินิกสุขภาพที่เชื่อถือได้ ✦
          </p>
        </footer>
      </article>
    </div>
    );
  } else if (currentPage === '9') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
      <article className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 prose prose-lg">
        {/* Header */}
        <div className="grid grid-cols-3 gap-8">
            <div>
              <button
                onClick={() => setCurrentPage('welcome')}
                className="text-left inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
                <ArrowRight className=" w-4 h-4 rotate-180 mr-2" />
                  ย้อนกลับ
              </button>
            </div>
            <div >
                </div>
            <div></div>
          </div>
        <header className="text-center">
          <h1 className="text-4xl font-bold text-center mb-6 text-pink-700">
                สีตกขาวบอกโรค
                </h1>
                <h3 className="text-xl font-bold text-center mb-6 text-pink-700">เข้าใจลักษณะและสัญญาณเตือนของร่างกาย</h3>
                <p className="text-sm text-gray-500">
            คู่มือสุขภาพสำหรับผู้หญิงเพื่อสังเกตลักษณะตกขาวและความผิดปกติที่ควรระวัง
          </p>
          <img
            src="../image/9.jpg"
            alt="Vaginal health concept"
            className="rounded-xl shadow-md mx-auto mt-6"
          />
        </header>

        {/* Intro */}
        <section>
          <h2 className="text-2xl font-semibold mt-6 text-blue-700">ตกขาวคืออะไร?</h2>
          <p>
            ตกขาว คือสารคัดหลั่งจากต่อมบริเวณปากมดลูกและผนังช่องคลอด
            ช่วยรักษาความชุ่มชื้นและสมดุลของช่องคลอด เกิดจากกระบวนการปกติของร่างกาย
            โดยมีการขับของเหลวและเซลล์ผนังที่หลุดลอกออกมา
          </p>
          <p>
            แต่หากมีความผิดปกติ ลักษณะ ปริมาณ และสีของตกขาวอาจเปลี่ยนแปลง
            ซึ่งสามารถบ่งบอกสัญญาณของโรคหรือความผิดปกติบางอย่างได้
          </p>
        </section>

        {/* Causes */}
        <section>
          <h2 className="text-2xl font-semibold mt-6 text-blue-700">สาเหตุที่พบบ่อย</h2>
          <ul>
            <li>การติดเชื้อแบคทีเรียหรือเชื้อรา</li>
            <li>การเปลี่ยนแปลงของฮอร์โมน เช่น ช่วงตั้งครรภ์ หรือก่อนประจำเดือนมา</li>
            <li>พฤติกรรมการทำความสะอาดช่องคลอดที่ไม่เหมาะสม</li>
            <li>การใส่ชุดชั้นในที่อับชื้นหรือไม่ระบายอากาศ</li>
          </ul>
        </section>

        {/* Colors and interpretation */}
        <section>
          <h2 className="text-2xl font-semibold mt-6 text-blue-700">สีของตกขาวและความหมาย</h2>
          <ul>
            <li>
              <strong>สีขาวใส:</strong> ปกติ ไม่มีกลิ่น ไม่คัน ไม่เจ็บ
            </li>
            <li>
              <strong>สีเขียวอ่อน:</strong> มีอาการคัน มีกลิ่นคาว แสดงถึงการติดเชื้อแบคทีเรีย หรือ STI เช่น โรคหนองใน
            </li>
            <li>
              <strong>สีเหลือง:</strong> อาจเป็นก้อนคล้ายนมบูด/แป้งเปียก มักมีอาการคัน สาเหตุอาจมาจากเชื้อรา
              หากคล้ายหนองและมีปัสสาวะแสบขัด อาจติดเชื้อแบคทีเรีย เช่น หนองใน
            </li>
            <li>
              <strong>สีเหลืองอ่อน:</strong> อาจเกิดจากการใช้ยาปฏิชีวนะติดต่อกัน หรือภูมิต้านทานต่ำ
            </li>
            <li>
              <strong>สีเทา:</strong> เตือนการติดเชื้อแบคทีเรีย มักมีกลิ่นแรง อาจมีอาการคันหรือรอยแดง
            </li>
            <li>
              <strong>สีชมพู:</strong> เกิดจากการลอกหลุดของเยื่อบุโพรงมดลูก พบหลังคลอด
            </li>
            <li>
              <strong>สีน้ำตาลหรือมีเลือดปน:</strong> ส่วนใหญ่เกิดจากประจำเดือนที่ตกค้าง
            </li>
          </ul>
        </section>

        {/* Closing */}
        <footer className="mt-8">
          <p className="text-gray-600 italic text-center">
            ✦ การสังเกตลักษณะตกขาวเป็นเครื่องมือช่วยดูแลสุขภาพช่องคลอด หากมีความผิดปกติควรปรึกษาแพทย์
            เพื่อตรวจวินิจฉัยและรับการรักษาที่เหมาะสม ✦
          </p>
        </footer>
      </article>
    </div>
    ); 
  }
             
}

export default Know;
import React from 'react';
import { PhoneIncoming } from 'lucide-react';

function Sos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-pink-600">
          Health Hotline
        </h1>
        <p className="text-center text-gray-600">
          สายด่วนสุขภาพทางเพศที่สำคัญ
        </p>

        <div className="space-y-4">
          <div className="p-4 border rounded-xl hover:shadow-md transition">

              <h2 className="font-semibold text-lg text-blue-700 flex items-center gap-2">
                <PhoneIncoming className="w-4 h-4" />
                สายด่วนอนามัยเจริญพันธุ์ 1663
              </h2>

            <p className="text-gray-600">
              - ให้คำปรึกษาเรื่องการคุมกำเนิด การตั้งครรภ์ไม่พร้อม โรคติดต่อทางเพศสัมพันธ์ รวมถึง HIV
              <br />
              - เปิดบริการทุกวัน 09.00 – 21.00 น.
            </p>
          </div>

          <div className="p-4 border rounded-xl hover:shadow-md transition">
            <h2 className="font-semibold text-lg text-blue-700 flex items-center gap-2">
                <PhoneIncoming className="w-4 h-4" />
                สายด่วนกรมควบคุมโรค 1422
              </h2>
            <p className="text-gray-600">
              - ให้ข้อมูลเกี่ยวกับโรคติดต่อ รวมถึง HIV และโรคติดต่อทางเพศสัมพันธ์
            </p>
          </div>

          <div className="p-4 border rounded-xl hover:shadow-md transition">
            <h2 className="font-semibold text-lg text-blue-700 flex items-center gap-2">
                <PhoneIncoming className="w-4 h-4" />
                มูลนิธิเอ็มพลัส
              </h2>
            <p className="text-gray-600">
              - สำหรับชายที่มีเพศสัมพันธ์กับชาย และหลากหลายทางเพศ
              <br />
              - โทร 053-215-590 (สำนักงานเชียงใหม่)
              <br />
              - ให้คำปรึกษาเรื่อง HIV, เพศสัมพันธ์ปลอดภัย, การตรวจเลือด
            </p>
          </div>

          <div className="p-4 border rounded-xl hover:shadow-md transition">
            <h2 className="font-semibold text-lg text-blue-700 flex items-center gap-2">
                <PhoneIncoming className="w-4 h-4" />
                สมาคมวางแผนครอบครัวแห่งประเทศไทย (PPAT)
              </h2>
            <p className="text-gray-600">
              - โทร 02-941-2320
              <br />
              - ให้คำปรึกษาด้านการคุมกำเนิด สุขภาพทางเพศ วัยรุ่นและครอบครัว
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sos;
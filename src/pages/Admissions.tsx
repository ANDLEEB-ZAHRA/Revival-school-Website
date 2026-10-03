import React, { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CampusCTABanner } from '../components/sections/CampusCTABanner';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/ui/SEO';
import { FAQS_DATA } from '../data/faqs';
import { AdmissionFormData } from '../types';
import { 
  CheckCircle2, 
  ClipboardList, 
  Calendar, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight
} from 'lucide-react';

export const Admissions: React.FC = () => {
  const [formData, setFormData] = useState<AdmissionFormData>({
    studentName: '',
    dateOfBirth: '',
    gender: '',
    applyingGrade: '',
    campusPreference: 'either',
    parentName: '',
    relationship: 'Father',
    phone: '',
    email: '',
    address: '',
    previousSchool: '',
    message: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>('f1');

  const admissionFaqs = FAQS_DATA.filter((f) => f.category === 'admissions');

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.gender) newErrors.gender = 'Please select gender';
    if (!formData.applyingGrade) newErrors.applyingGrade = 'Please select applying grade';
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent/Guardian name is required';
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits)';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.address.trim()) newErrors.address = 'Residential address is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must acknowledge the terms to submit';

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1200);
    } else {
      // Scroll to first error
      const firstErrorKey = Object.keys(errs)[0];
      const el = document.getElementById(firstErrorKey);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <SEO
        title="Admissions 2026-2027 | Revival School Gujrat"
        description="Apply for admission at Revival School Gujrat. View eligibility criteria, admission procedure, required documents, and submit your online application."
      />

      <main className="bg-[#f8fafd]">
        <PageHero
          badge="ENROLLMENT 2026-2027"
          title="Begin Your Journey at Revival"
          subtitle="Admissions are now open for Early Years Montessori, Primary, Middle, and Matriculation Secondary classes. We welcome aspiring students to join our thriving academic community."
          breadcrumb="Admissions"
        />

        {/* 4-Step Admission Procedure */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="STEP-BY-STEP GUIDE"
              title="Admission Procedure"
              subtitle="Our streamlined four-step process ensures a seamless and supportive enrollment experience for families."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-sm relative group hover:border-brand-blue-400 transition-all">
                <div className="w-10 h-10 rounded-full bg-brand-blue-600 text-white font-bold flex items-center justify-center mb-4 text-sm shadow-md">
                  1
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-navy-900 mb-2">
                  Submit Application
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  Complete the online application form below or visit the admissions office on campus to collect an admission prospectus.
                </p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-sm relative group hover:border-brand-blue-400 transition-all">
                <div className="w-10 h-10 rounded-full bg-brand-gold-500 text-white font-bold flex items-center justify-center mb-4 text-sm shadow-md">
                  2
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-navy-900 mb-2">
                  Assessment Test
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  Students from Grade 1 onwards appear for a friendly diagnostic test assessing basic English, Mathematics, and Urdu aptitude.
                </p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-sm relative group hover:border-brand-blue-400 transition-all">
                <div className="w-10 h-10 rounded-full bg-brand-navy-900 text-white font-bold flex items-center justify-center mb-4 text-sm shadow-md">
                  3
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-navy-900 mb-2">
                  Parent Interview
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  An informal conversation with the Principal or Academic Coordinator to understand student needs and align educational goals.
                </p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-sm relative group hover:border-brand-blue-400 transition-all">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center mb-4 text-sm shadow-md">
                  4
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-navy-900 mb-2">
                  Fee & Confirmation
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  Upon acceptance, submit required identity documents and fee voucher to finalize enrollment and receive class schedule.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Required Documents & Eligibility */}
        <section className="py-16 md:py-20 bg-[#edf4fc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Documents */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-2xl bg-brand-blue-50 text-brand-blue-600">
                    <ClipboardList size={22} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-brand-navy-900">
                      Required Documents
                    </h3>
                    <p className="text-xs text-slate-500">Please prepare attested copies</p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>Copy of Student NADRA B-Form or Official Birth Certificate</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>4 Recent Passport-size Photographs with blue background</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>Copy of Father / Mother / Guardian CNIC</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>Original School Leaving Certificate (SLC) for transfer cases</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>Latest Progress Report Card / Result Slip from previous school</span>
                  </li>
                </ul>
              </div>

              {/* Age Criteria & Fee Overview */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-brand-gold-50 text-brand-gold-600">
                    <Calendar size={22} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-brand-navy-900">
                      Age Eligibility (as of August 2026)
                    </h3>
                    <p className="text-xs text-slate-500">Standard intake age guidelines</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-900">Playgroup / Montessori Beginner</span>
                    <span className="text-brand-blue-700 font-bold">2.5 – 3.5 Years</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-900">Nursery / Kindergarten</span>
                    <span className="text-brand-blue-700 font-bold">3.5 – 5.0 Years</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-900">Primary (Grade 1)</span>
                    <span className="text-brand-blue-700 font-bold">5.5 – 6.5 Years</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-900">Secondary (Grade 9 Matric)</span>
                    <span className="text-brand-blue-700 font-bold">13.5+ Years</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-brand-gold-50 border border-brand-gold-200 text-xs text-brand-gold-900 leading-relaxed">
                  <strong>Merit Scholarships:</strong> Up to 50% tuition waivers are awarded to top position holders, orphans, and siblings under our institutional assistance program.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Complete Application Form Section */}
        <section className="py-16 md:py-24 bg-white" id="apply">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <SectionHeader
              badge="ONLINE ADMISSION PORTAL"
              title="Official Student Application Form"
              subtitle="Please complete all required fields accurately. Our admissions committee will review your submission and contact you within 24-48 business hours."
            />

            {isSuccess ? (
              <div className="bg-emerald-50 border-2 border-emerald-300 rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-xl animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-950">
                  Application Submitted Successfully!
                </h3>
                <p className="text-sm sm:text-base text-emerald-800 max-w-lg mx-auto leading-relaxed">
                  Thank you for applying to Revival School Gujrat. An application reference has been generated for <strong>{formData.studentName}</strong>. Our admissions officer will contact you shortly to schedule the assessment.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <Button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        studentName: '',
                        dateOfBirth: '',
                        gender: '',
                        applyingGrade: '',
                        campusPreference: 'either',
                        parentName: '',
                        relationship: 'Father',
                        phone: '',
                        email: '',
                        address: '',
                        previousSchool: '',
                        message: '',
                        agreeToTerms: false,
                      });
                    }}
                    variant="primary"
                    size="sm"
                  >
                    Submit Another Application
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-[#f8fafd] rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Part 1: Student Information */}
                  <div>
                    <h3 className="font-serif font-bold text-lg text-brand-navy-900 border-b border-slate-200 pb-2 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-brand-blue-600 text-white text-xs flex items-center justify-center font-sans">1</span>
                      Student Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Student Name */}
                      <div id="studentName">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Full Student Name *
                        </label>
                        <input
                          type="text"
                          value={formData.studentName}
                          onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                          placeholder="e.g. Muhammad Ahmad"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all ${
                            errors.studentName ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-brand-blue-200 focus:border-brand-blue-500'
                          }`}
                        />
                        {errors.studentName && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.studentName}
                          </p>
                        )}
                      </div>

                      {/* Date of Birth */}
                      <div id="dateOfBirth">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all ${
                            errors.dateOfBirth ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-brand-blue-200 focus:border-brand-blue-500'
                          }`}
                        />
                        {errors.dateOfBirth && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.dateOfBirth}
                          </p>
                        )}
                      </div>

                      {/* Gender */}
                      <div id="gender">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Gender *
                        </label>
                        <select
                          value={formData.gender}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all ${
                            errors.gender ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-brand-blue-200 focus:border-brand-blue-500'
                          }`}
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                        {errors.gender && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.gender}
                          </p>
                        )}
                      </div>

                      {/* Applying Grade */}
                      <div id="applyingGrade">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Applying Grade / Program *
                        </label>
                        <select
                          value={formData.applyingGrade}
                          onChange={(e) => setFormData({ ...formData, applyingGrade: e.target.value })}
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all ${
                            errors.applyingGrade ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-brand-blue-200 focus:border-brand-blue-500'
                          }`}
                        >
                          <option value="">Select Grade</option>
                          <option value="playgroup">Playgroup / Montessori Toddler</option>
                          <option value="nursery">Nursery</option>
                          <option value="kindergarten">Kindergarten (Prep)</option>
                          <option value="grade-1">Grade 1</option>
                          <option value="grade-2">Grade 2</option>
                          <option value="grade-3">Grade 3</option>
                          <option value="grade-4">Grade 4</option>
                          <option value="grade-5">Grade 5</option>
                          <option value="grade-6">Grade 6</option>
                          <option value="grade-7">Grade 7</option>
                          <option value="grade-8">Grade 8</option>
                          <option value="grade-9-science">Grade 9 (Matric Science)</option>
                          <option value="grade-9-arts">Grade 9 (Matric Arts)</option>
                          <option value="grade-10-science">Grade 10 (Matric Science)</option>
                        </select>
                        {errors.applyingGrade && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.applyingGrade}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Part 2: Parent / Guardian Information */}
                  <div>
                    <h3 className="font-serif font-bold text-lg text-brand-navy-900 border-b border-slate-200 pb-2 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-brand-blue-600 text-white text-xs flex items-center justify-center font-sans">2</span>
                      Parent / Guardian Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Parent Name */}
                      <div id="parentName">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Parent / Guardian Name *
                        </label>
                        <input
                          type="text"
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          placeholder="e.g. Dr. Tariq Mehmood"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all ${
                            errors.parentName ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-brand-blue-200 focus:border-brand-blue-500'
                          }`}
                        />
                        {errors.parentName && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.parentName}
                          </p>
                        )}
                      </div>

                      {/* Relationship */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Relationship
                        </label>
                        <select
                          value={formData.relationship}
                          onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-200 focus:border-brand-blue-500"
                        >
                          <option value="Father">Father</option>
                          <option value="Mother">Mother</option>
                          <option value="Guardian">Guardian</option>
                        </select>
                      </div>

                      {/* Phone */}
                      <div id="phone">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Contact Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0300 6222449"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all ${
                            errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-brand-blue-200 focus:border-brand-blue-500'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div id="email">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="parent@example.com"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all ${
                            errors.email ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-brand-blue-200 focus:border-brand-blue-500'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Part 3: Prior School & Address */}
                  <div>
                    <h3 className="font-serif font-bold text-lg text-brand-navy-900 border-b border-slate-200 pb-2 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-brand-blue-600 text-white text-xs flex items-center justify-center font-sans">3</span>
                      Academic Background & Address
                    </h3>

                    <div className="space-y-4">
                      {/* Previous School */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Previous School Attended (if applicable)
                        </label>
                        <input
                          type="text"
                          value={formData.previousSchool}
                          onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                          placeholder="Name of previous institution & city"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-200 focus:border-brand-blue-500"
                        />
                      </div>

                      {/* Residential Address */}
                      <div id="address">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Residential Address in Gujrat *
                        </label>
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="House / Street, Area, Gujrat"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all ${
                            errors.address ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-brand-blue-200 focus:border-brand-blue-500'
                          }`}
                        />
                        {errors.address && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.address}
                          </p>
                        )}
                      </div>

                      {/* Additional Notes */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Special Needs, Medical Notes or Inquiries
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Any specific information you would like our admissions team to know..."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-200 focus:border-brand-blue-500 resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-2" id="agreeToTerms">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreeToTerms}
                        onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded text-brand-blue-600 focus:ring-brand-blue-500 border-slate-300"
                      />
                      <span className="text-xs text-slate-600 leading-relaxed">
                        I hereby certify that the information provided is accurate and authentic. I understand this application initiates the evaluation process at Revival School Gujrat.
                      </span>
                    </label>
                    {errors.agreeToTerms && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 ml-7">
                        <AlertCircle size={12} /> {errors.agreeToTerms}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex justify-end">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="px-10 shadow-lg"
                      icon={<ArrowRight size={18} />}
                    >
                      {isSubmitting ? 'Submitting Application...' : 'Submit Admission Application'}
                    </Button>
                  </div>

                </form>
              </div>
            )}

          </div>
        </section>

        {/* Admissions FAQ Accordion */}
        <section className="py-16 md:py-20 bg-[#edf4fc]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="FREQUENTLY ASKED QUESTIONS"
              title="Admissions & Enrollment FAQs"
              subtitle="Quick answers to common questions regarding admissions criteria, fees, and tests."
            />

            <div className="space-y-3">
              {admissionFaqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-serif font-bold text-base text-brand-navy-900">
                        {faq.question}
                      </span>
                      <span className="text-brand-blue-600 shrink-0">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CampusCTABanner buttonText="Contact Admissions Office" buttonLink="/contact" />
      </main>
    </>
  );
};

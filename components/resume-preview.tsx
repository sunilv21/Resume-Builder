"use client"

import { ClassicTemplate } from "@/components/templates/classic-template"
import { ModernTemplate } from "@/components/templates/modern-template"
import { MinimalTemplate } from "@/components/templates/minimal-template"
import { CreativeTemplate } from "@/components/templates/creative-template"
import { ProfessionalTemplate } from "@/components/templates/professional-template"
import { sampleResumeData } from "@/lib/sample-resume-data"
import { useEffect, useState } from "react"

interface ResumePreviewProps {
  templateId: string
  resumeData: any
}

export function ResumePreview({ templateId, resumeData }: ResumePreviewProps) {
  const [displayData, setDisplayData] = useState(resumeData)

  // Use sample data for empty fields
  useEffect(() => {
    const mergedData = {
      personal: {
        name: resumeData.personal.name || sampleResumeData.personal.name,
        title: resumeData.personal.title || sampleResumeData.personal.title,
        email: resumeData.personal.email || sampleResumeData.personal.email,
        phone: resumeData.personal.phone || sampleResumeData.personal.phone,
        location: resumeData.personal.location || sampleResumeData.personal.location,
        summary: resumeData.personal.summary || sampleResumeData.personal.summary,
        profileImage: sampleResumeData.personal.profileImage,
      },
      experience: resumeData.experience.some((exp) => exp.title) ? resumeData.experience : sampleResumeData.experience,
      education: resumeData.education.some((edu) => edu.degree) ? resumeData.education : sampleResumeData.education,
      skills: resumeData.skills.some((skill) => skill.name) ? resumeData.skills : sampleResumeData.skills,
    }

    setDisplayData(mergedData)
  }, [resumeData])

  const renderTemplate = () => {
    switch (templateId) {
      case "1":
        return <ClassicTemplate data={displayData} />
      case "2":
        return <CreativeTemplate data={displayData} />
      case "3":
        return <MinimalTemplate data={displayData} />
      case "4":
        return <ModernTemplate data={displayData} />
      case "5":
        return <ProfessionalTemplate data={displayData} />
      case "6":
        return <CreativeTemplate data={displayData} />
      case "7":
        return <MinimalTemplate data={displayData} />
      case "8":
        return <ModernTemplate data={displayData} />
      case "9":
        return <ProfessionalTemplate data={displayData} />
      default:
        return <ClassicTemplate data={displayData} />
    }
  }

  return (
    <div className="w-full h-full min-h-[842px] bg-white overflow-auto shadow-sm border flex justify-center">
      {renderTemplate()}
    </div>
  )
}


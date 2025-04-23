"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Download, Eye, Plus, Trash2, RefreshCw } from "lucide-react"
import { ResumePreview } from "@/components/resume-preview"
import { sampleResumeData } from "@/lib/sample-resume-data"

export default function EditorPage() {
  const searchParams = useSearchParams()
  const templateId = searchParams.get("template") || "1"

  const [activeTab, setActiveTab] = useState("personal")
  const [resumeData, setResumeData] = useState(sampleResumeData)

  // Load saved data or sample data
  useEffect(() => {
    const savedData = localStorage.getItem("resumeData")
    if (savedData) {
      setResumeData(JSON.parse(savedData))
    } else {
      setResumeData(sampleResumeData)
    }
  }, [])

  // Save data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData))
  }, [resumeData])

  const handlePersonalChange = (e) => {
    const { name, value } = e.target
    setResumeData({
      ...resumeData,
      personal: {
        ...resumeData.personal,
        [name]: value,
      },
    })
  }

  const handleExperienceChange = (id, field, value) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
    })
  }

  const handleEducationChange = (id, field, value) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)),
    })
  }

  const handleSkillChange = (id, value) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.map((skill) => (skill.id === id ? { ...skill, name: value } : skill)),
    })
  }

  const addExperience = () => {
    const newId = Math.max(0, ...resumeData.experience.map((exp) => exp.id)) + 1
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        { id: newId, title: "", company: "", location: "", startDate: "", endDate: "", description: "" },
      ],
    })
  }

  const removeExperience = (id) => {
    if (resumeData.experience.length > 1) {
      setResumeData({
        ...resumeData,
        experience: resumeData.experience.filter((exp) => exp.id !== id),
      })
    }
  }

  const addEducation = () => {
    const newId = Math.max(0, ...resumeData.education.map((edu) => edu.id)) + 1
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        { id: newId, degree: "", school: "", location: "", startDate: "", endDate: "", description: "" },
      ],
    })
  }

  const removeEducation = (id) => {
    if (resumeData.education.length > 1) {
      setResumeData({
        ...resumeData,
        education: resumeData.education.filter((edu) => edu.id !== id),
      })
    }
  }

  const addSkill = () => {
    const newId = Math.max(0, ...resumeData.skills.map((skill) => skill.id)) + 1
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, { id: newId, name: "" }],
    })
  }

  const removeSkill = (id) => {
    if (resumeData.skills.length > 1) {
      setResumeData({
        ...resumeData,
        skills: resumeData.skills.filter((skill) => skill.id !== id),
      })
    }
  }

  const downloadResume = () => {
    // In a real application, this would generate a PDF
    alert("In a real application, this would download your resume as a PDF")
  }

  const resetToSampleData = () => {
    setResumeData(sampleResumeData)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm w-full">
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <FileText className="h-6 w-6" />
            <span>ResumeBuilder</span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={resetToSampleData} className="flex items-center gap-1">
              <RefreshCw className="h-4 w-4" /> Reset Data
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveTab("preview")}
              className="flex items-center gap-1"
            >
              <Eye className="h-4 w-4" /> Preview
            </Button>
            <Button size="sm" onClick={downloadResume} className="flex items-center gap-1">
              <Download className="h-4 w-4" /> Download PDF
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 w-full py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              <TabsContent value="personal" className="space-y-4 mt-4">
                <Card className="p-4 space-y-4 shadow-sm">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={resumeData.personal.name}
                      onChange={handlePersonalChange}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Professional Title</Label>
                    <Input
                      id="title"
                      name="title"
                      value={resumeData.personal.title}
                      onChange={handlePersonalChange}
                      placeholder="Software Engineer"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={resumeData.personal.email}
                      onChange={handlePersonalChange}
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={resumeData.personal.phone}
                      onChange={handlePersonalChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      value={resumeData.personal.location}
                      onChange={handlePersonalChange}
                      placeholder="New York, NY"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="summary">Professional Summary</Label>
                    <Textarea
                      id="summary"
                      name="summary"
                      value={resumeData.personal.summary}
                      onChange={handlePersonalChange}
                      placeholder="A brief summary of your professional background and goals"
                      rows={4}
                    />
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="experience" className="space-y-4 mt-4">
                {resumeData.experience.map((exp) => (
                  <Card key={exp.id} className="p-4 space-y-4 shadow-sm">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Work Experience</h3>
                      {resumeData.experience.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeExperience(exp.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`job-title-${exp.id}`}>Job Title</Label>
                      <Input
                        id={`job-title-${exp.id}`}
                        value={exp.title}
                        onChange={(e) => handleExperienceChange(exp.id, "title", e.target.value)}
                        placeholder="Software Engineer"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`company-${exp.id}`}>Company</Label>
                      <Input
                        id={`company-${exp.id}`}
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(exp.id, "company", e.target.value)}
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`job-location-${exp.id}`}>Location</Label>
                      <Input
                        id={`job-location-${exp.id}`}
                        value={exp.location}
                        onChange={(e) => handleExperienceChange(exp.id, "location", e.target.value)}
                        placeholder="New York, NY"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`start-date-${exp.id}`}>Start Date</Label>
                        <Input
                          id={`start-date-${exp.id}`}
                          value={exp.startDate}
                          onChange={(e) => handleExperienceChange(exp.id, "startDate", e.target.value)}
                          placeholder="Jan 2020"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`end-date-${exp.id}`}>End Date</Label>
                        <Input
                          id={`end-date-${exp.id}`}
                          value={exp.endDate}
                          onChange={(e) => handleExperienceChange(exp.id, "endDate", e.target.value)}
                          placeholder="Present"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`job-description-${exp.id}`}>Description</Label>
                      <Textarea
                        id={`job-description-${exp.id}`}
                        value={exp.description}
                        onChange={(e) => handleExperienceChange(exp.id, "description", e.target.value)}
                        placeholder="Describe your responsibilities and achievements"
                        rows={4}
                      />
                    </div>
                  </Card>
                ))}
                <Button variant="outline" className="w-full" onClick={addExperience}>
                  <Plus className="mr-2 h-4 w-4" /> Add Experience
                </Button>
              </TabsContent>
              <TabsContent value="education" className="space-y-4 mt-4">
                {resumeData.education.map((edu) => (
                  <Card key={edu.id} className="p-4 space-y-4 shadow-sm">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Education</h3>
                      {resumeData.education.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeEducation(edu.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
                      <Input
                        id={`degree-${edu.id}`}
                        value={edu.degree}
                        onChange={(e) => handleEducationChange(edu.id, "degree", e.target.value)}
                        placeholder="Bachelor of Science in Computer Science"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`school-${edu.id}`}>School</Label>
                      <Input
                        id={`school-${edu.id}`}
                        value={edu.school}
                        onChange={(e) => handleEducationChange(edu.id, "school", e.target.value)}
                        placeholder="University of Technology"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`edu-location-${edu.id}`}>Location</Label>
                      <Input
                        id={`edu-location-${edu.id}`}
                        value={edu.location}
                        onChange={(e) => handleEducationChange(edu.id, "location", e.target.value)}
                        placeholder="Boston, MA"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`edu-start-date-${edu.id}`}>Start Date</Label>
                        <Input
                          id={`edu-start-date-${edu.id}`}
                          value={edu.startDate}
                          onChange={(e) => handleEducationChange(edu.id, "startDate", e.target.value)}
                          placeholder="Sep 2016"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`edu-end-date-${edu.id}`}>End Date</Label>
                        <Input
                          id={`edu-end-date-${edu.id}`}
                          value={edu.endDate}
                          onChange={(e) => handleEducationChange(edu.id, "endDate", e.target.value)}
                          placeholder="May 2020"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`edu-description-${edu.id}`}>Description</Label>
                      <Textarea
                        id={`edu-description-${edu.id}`}
                        value={edu.description}
                        onChange={(e) => handleEducationChange(edu.id, "description", e.target.value)}
                        placeholder="Relevant coursework, achievements, or activities"
                        rows={4}
                      />
                    </div>
                  </Card>
                ))}
                <Button variant="outline" className="w-full" onClick={addEducation}>
                  <Plus className="mr-2 h-4 w-4" /> Add Education
                </Button>
              </TabsContent>
              <TabsContent value="skills" className="space-y-4 mt-4">
                <Card className="p-4 space-y-4 shadow-sm">
                  <h3 className="font-medium">Skills</h3>
                  {resumeData.skills.map((skill) => (
                    <div key={skill.id} className="flex items-center gap-2">
                      <Input
                        value={skill.name}
                        onChange={(e) => handleSkillChange(skill.id, e.target.value)}
                        placeholder="e.g. JavaScript, Project Management, etc."
                      />
                      {resumeData.skills.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeSkill(skill.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" onClick={addSkill}>
                    <Plus className="mr-2 h-4 w-4" /> Add Skill
                  </Button>
                </Card>
              </TabsContent>
              <TabsContent value="preview" className="mt-4">
                <div className="flex justify-center">
                  <Button onClick={downloadResume} className="mb-4">
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="w-full lg:w-2/3 bg-white border rounded-md shadow-sm">
            <ResumePreview templateId={templateId} resumeData={resumeData} />
          </div>
        </div>
      </main>
      <footer className="border-t bg-white w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full py-6">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} ResumeBuilder. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}


import Image from "next/image"

interface ProfessionalTemplateProps {
  data: any
}

export function ProfessionalTemplate({ data }: ProfessionalTemplateProps) {
  const { personal, experience, education, skills } = data

  return (
    <div className="w-full max-w-[800px] mx-auto font-sans p-0 print:p-0">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 border-b-4 border-teal-600">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            {/* Profile Image */}
            <div className="w-28 h-28 rounded-md overflow-hidden border-2 border-teal-500 flex-shrink-0 shadow-md">
              <Image
                src={personal.profileImage || "/placeholder.svg?height=150&width=150"}
                alt={personal.name}
                width={112}
                height={112}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-800 mb-1">{personal.name}</h1>
              <p className="text-xl text-teal-600">{personal.title}</p>
            </div>
          </div>

          <div className="mt-4 md:mt-0 space-y-1 text-center md:text-right">
            {personal.email && <p className="text-sm text-gray-700">{personal.email}</p>}
            {personal.phone && <p className="text-sm text-gray-700">{personal.phone}</p>}
            {personal.location && <p className="text-sm text-gray-700">{personal.location}</p>}
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Summary */}
        {personal.summary && (
          <div className="mb-8">
            <h2 className="text-lg font-bold text-teal-700 mb-3 uppercase tracking-wider border-b-2 border-teal-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">{personal.summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-bold text-teal-700 mb-4 uppercase tracking-wider border-b-2 border-teal-200 pb-1">
              Professional Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="font-bold text-gray-800">{exp.title}</h3>
                  <p className="text-sm font-medium text-teal-600 mt-1 sm:mt-0">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <p className="text-sm font-semibold mb-2 text-gray-700">
                  {exp.company}
                  {exp.location ? `, ${exp.location}` : ""}
                </p>
                <p className="text-sm leading-relaxed whitespace-pre-line text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-bold text-teal-700 mb-4 uppercase tracking-wider border-b-2 border-teal-200 pb-1">
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-sm font-medium text-teal-600 mt-1 sm:mt-0">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
                <p className="text-sm font-semibold text-gray-700">
                  {edu.school}
                  {edu.location ? `, ${edu.location}` : ""}
                </p>
                {edu.description && <p className="text-sm mt-1 leading-relaxed text-gray-600">{edu.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-teal-700 mb-3 uppercase tracking-wider border-b-2 border-teal-200 pb-1">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
              {skills.map((skill) => (
                <div key={skill.id} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


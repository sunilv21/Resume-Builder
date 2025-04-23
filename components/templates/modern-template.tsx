import Image from "next/image"

interface ModernTemplateProps {
  data: any
}

export function ModernTemplate({ data }: ModernTemplateProps) {
  const { personal, experience, education, skills } = data

  return (
    <div className="w-full max-w-[800px] mx-auto font-sans p-0 print:p-0">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 mb-6 shadow-md">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-600 bg-white flex-shrink-0 shadow-xl">
            <Image
              src={personal.profileImage || "/placeholder.svg?height=150&width=150"}
              alt={personal.name}
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="text-center md:text-left flex-grow">
            <h1 className="text-3xl font-bold mb-1 text-white">{personal.name}</h1>
            <p className="text-xl mb-4 text-slate-200">{personal.title}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-300">
              {personal.email && (
                <p className="flex items-center gap-1 hover:text-white transition-colors">📧 {personal.email}</p>
              )}
              {personal.phone && (
                <p className="flex items-center gap-1 hover:text-white transition-colors">📱 {personal.phone}</p>
              )}
              {personal.location && (
                <p className="flex items-center gap-1 hover:text-white transition-colors">📍 {personal.location}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
        {/* Left Column */}
        <div className="md:col-span-1">
          {/* Skills */}
          {skills.length > 0 && (
            <div className="mb-8 bg-slate-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold text-slate-800 mb-3 pb-1 border-b border-slate-300">Skills</h2>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li key={skill.id} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                    <span className="text-slate-700">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold text-slate-800 mb-3 pb-1 border-b border-slate-300">Education</h2>
              {education.map((edu) => (
                <div key={edu.id} className="mb-5">
                  <h3 className="font-bold text-slate-700">{edu.degree}</h3>
                  <p className="text-sm font-medium text-slate-600">{edu.school}</p>
                  <p className="text-sm text-slate-500">{edu.location}</p>
                  <p className="text-sm text-slate-500 mb-1">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  {edu.description && <p className="text-sm text-slate-600">{edu.description}</p>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="md:col-span-2">
          {/* Summary */}
          {personal.summary && (
            <div className="mb-8 bg-slate-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold text-slate-800 mb-3 pb-1 border-b border-slate-300">Profile</h2>
              <p className="text-sm leading-relaxed text-slate-700">{personal.summary}</p>
            </div>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold text-slate-800 mb-3 pb-1 border-b border-slate-300">Experience</h2>
              {experience.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h3 className="font-bold text-slate-800">{exp.title}</h3>
                    <p className="text-sm text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                  <p className="text-sm font-medium mb-2 text-slate-700">
                    {exp.company}
                    {exp.location ? `, ${exp.location}` : ""}
                  </p>
                  <p className="text-sm leading-relaxed whitespace-pre-line text-slate-600">{exp.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


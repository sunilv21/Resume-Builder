import Image from "next/image"

interface CreativeTemplateProps {
  data: any
}

export function CreativeTemplate({ data }: CreativeTemplateProps) {
  const { personal, experience, education, skills } = data

  return (
    <div className="w-full max-w-[800px] mx-auto font-sans p-0 print:p-0">
      {/* Header with accent color */}
      <div className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 text-white p-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Profile Image */}
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white border-opacity-30 flex-shrink-0 shadow-xl">
            <Image
              src={personal.profileImage || "/placeholder.svg?height=150&width=150"}
              alt={personal.name}
              width={144}
              height={144}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="text-center md:text-left flex-grow">
            <h1 className="text-4xl font-bold mb-2 text-white">{personal.name}</h1>
            <p className="text-xl mb-6 text-white text-opacity-90">{personal.title}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              {personal.email && (
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-1.5 shadow-inner">📧</div>
                  <span>{personal.email}</span>
                </div>
              )}
              {personal.phone && (
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-1.5 shadow-inner">📱</div>
                  <span>{personal.phone}</span>
                </div>
              )}
              {personal.location && (
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-1.5 shadow-inner">📍</div>
                  <span>{personal.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 bg-gradient-to-b from-white to-purple-50">
        {/* Summary */}
        {personal.summary && (
          <div className="mb-8 bg-white p-6 rounded-xl border-l-4 border-violet-500 shadow-md">
            <h2 className="text-xl font-bold text-violet-700 mb-3">About Me</h2>
            <p className="text-sm leading-relaxed text-gray-700">{personal.summary}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Experience */}
          <div className="lg:col-span-2">
            {/* Experience */}
            {experience.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-violet-700 flex items-center">
                  <span className="bg-violet-100 rounded-full p-1 mr-2 shadow-sm">💼</span>
                  Work Experience
                </h2>
                {experience.map((exp) => (
                  <div key={exp.id} className="mb-6 relative pl-6 border-l-2 border-violet-300 pb-6">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-violet-500 shadow-md"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                      <h3 className="font-bold text-lg text-violet-800">{exp.title}</h3>
                      <p className="text-sm bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full mt-1 sm:mt-0 shadow-sm">
                        {exp.startDate} - {exp.endDate}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
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
              <div>
                <h2 className="text-xl font-bold mb-4 text-violet-700 flex items-center">
                  <span className="bg-violet-100 rounded-full p-1 mr-2 shadow-sm">🎓</span>
                  Education
                </h2>
                {education.map((edu) => (
                  <div key={edu.id} className="mb-5 relative pl-6 border-l-2 border-violet-300 pb-6">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-violet-500 shadow-md"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                      <h3 className="font-bold text-violet-800">{edu.degree}</h3>
                      <p className="text-sm bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full mt-1 sm:mt-0 shadow-sm">
                        {edu.startDate} - {edu.endDate}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      {edu.school}
                      {edu.location ? `, ${edu.location}` : ""}
                    </p>
                    {edu.description && <p className="text-sm mt-1 leading-relaxed text-gray-600">{edu.description}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar - Skills */}
          <div className="lg:col-span-1">
            {/* Skills */}
            {skills.length > 0 && (
              <div className="bg-white p-6 rounded-xl shadow-md sticky top-6">
                <h2 className="text-xl font-bold mb-4 text-violet-700 flex items-center">
                  <span className="bg-violet-100 rounded-full p-1 mr-2 shadow-sm">🔧</span>
                  Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.id}
                      className="bg-gradient-to-r from-violet-50 to-fuchsia-50 border border-violet-200 rounded-full px-3 py-1 text-sm text-violet-700 shadow-sm"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


import Image from "next/image"

interface MinimalTemplateProps {
  data: any
}

export function MinimalTemplate({ data }: MinimalTemplateProps) {
  const { personal, experience, education, skills } = data

  return (
    <div className="w-full max-w-[800px] mx-auto font-sans p-8 print:p-0 bg-white">
      {/* Header */}
      <div className="mb-10 text-center">
        {/* Profile Image */}
        <div className="mx-auto w-28 h-28 rounded-full overflow-hidden border border-gray-200 mb-4 shadow-md">
          <Image
            src={personal.profileImage || "/placeholder.svg?height=150&width=150"}
            alt={personal.name}
            width={112}
            height={112}
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="text-3xl font-light tracking-wide mb-2 text-gray-800">{personal.name}</h1>
        <p className="text-lg text-gray-500 mb-3">{personal.title}</p>
        <div className="flex justify-center flex-wrap gap-x-6 text-sm text-gray-500">
          {personal.email && <p>{personal.email}</p>}
          {personal.phone && <p>{personal.phone}</p>}
          {personal.location && <p>{personal.location}</p>}
        </div>
        <div className="mt-6 mx-auto w-20 h-0.5 bg-gray-300"></div>
      </div>

      {/* Summary */}
      {personal.summary && (
        <div className="mb-10">
          <p className="text-sm text-center max-w-2xl mx-auto leading-relaxed text-gray-600">{personal.summary}</p>
          <div className="mt-6 mx-auto w-20 h-0.5 bg-gray-300"></div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-10">
          <h2 className="text-base uppercase tracking-widest text-center mb-6 font-normal text-gray-500">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="font-medium text-center sm:text-left text-gray-800">{exp.title}</h3>
                <p className="text-sm text-gray-500 text-center sm:text-right">
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
              <p className="text-sm mb-2 text-center sm:text-left text-gray-600">
                {exp.company}
                {exp.location ? `, ${exp.location}` : ""}
              </p>
              <p className="text-sm leading-relaxed whitespace-pre-line text-left text-gray-600">{exp.description}</p>
            </div>
          ))}
          <div className="mt-6 mx-auto w-20 h-0.5 bg-gray-300"></div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-10">
          <h2 className="text-base uppercase tracking-widest text-center mb-6 font-normal text-gray-500">Education</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="mb-4 text-center">
                <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                <p className="text-sm text-gray-600">
                  {edu.school}
                  {edu.location ? `, ${edu.location}` : ""}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  {edu.startDate} - {edu.endDate}
                </p>
                {edu.description && (
                  <p className="text-sm mt-1 leading-relaxed mx-auto max-w-lg text-gray-600">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 mx-auto w-20 h-0.5 bg-gray-300"></div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-base uppercase tracking-widest text-center mb-6 font-normal text-gray-500">Skills</h2>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {skills.map((skill) => (
              <span
                key={skill.id}
                className="text-sm border-b border-gray-300 px-2 py-1 text-gray-700 hover:text-gray-900 transition-colors"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}


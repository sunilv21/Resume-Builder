import Image from "next/image"

interface ClassicTemplateProps {
  data: any
}

export function ClassicTemplate({ data }: ClassicTemplateProps) {
  const { personal, experience, education, skills } = data

  return (
    <div className="w-full max-w-[800px] mx-auto font-serif p-8 print:p-0">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 border-b-2 border-emerald-700 pb-6">
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-100 shadow-lg flex-shrink-0">
          <Image
            src={personal.profileImage || "/placeholder.svg?height=150&width=150"}
            alt={personal.name}
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="text-center md:text-left flex-grow">
          <h1 className="text-3xl font-bold mb-1 text-emerald-800">{personal.name}</h1>
          <p className="text-xl mb-3 text-emerald-600">{personal.title}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 text-sm">
            {personal.email && (
              <p className="flex items-center gap-1 text-gray-700">
                <span className="text-emerald-600">📧</span> {personal.email}
              </p>
            )}
            {personal.phone && (
              <p className="flex items-center gap-1 text-gray-700">
                <span className="text-emerald-600">📱</span> {personal.phone}
              </p>
            )}
            {personal.location && (
              <p className="flex items-center gap-1 text-gray-700">
                <span className="text-emerald-600">📍</span> {personal.location}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      {personal.summary && (
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-emerald-200 mb-3 pb-1 text-emerald-800">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-left text-gray-700">{personal.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-emerald-200 mb-3 pb-1 text-emerald-800">Work Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <h3 className="font-bold text-lg text-emerald-700">{exp.title}</h3>
                <p className="text-sm italic sm:text-right text-emerald-600">
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
              <p className="font-semibold text-gray-700">
                {exp.company}
                {exp.location ? `, ${exp.location}` : ""}
              </p>
              <p className="text-sm mt-2 leading-relaxed whitespace-pre-line text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-emerald-200 mb-3 pb-1 text-emerald-800">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <h3 className="font-bold text-emerald-700">{edu.degree}</h3>
                <p className="text-sm italic sm:text-right text-emerald-600">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
              <p className="font-semibold text-gray-700">
                {edu.school}
                {edu.location ? `, ${edu.location}` : ""}
              </p>
              {edu.description && <p className="text-sm mt-1 leading-relaxed text-gray-700">{edu.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-xl font-bold border-b border-emerald-200 mb-3 pb-1 text-emerald-800">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.id}
                className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-sm shadow-sm"
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


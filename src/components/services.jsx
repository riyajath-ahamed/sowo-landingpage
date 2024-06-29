import { ChartBarIcon,UsersIcon, BuildingLibraryIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Educational Support',
    description:
      'Scholarships and educational grants for underprivileged student, Tutoring and mentorship programs to support academic excellence, School infrastructure development projects',
    icon: AcademicCapIcon,
  },
  {
    name: 'Healthcare Assistance',
    description:
      'Medical camps and health awareness programs, Access to healthcare services for marginalized communities, Support for individuals with disabilities.',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'Skill Development',
    description:
      'Vocational training and job placement assistance. Entrepreneurship workshops and small business support. Training programs for personal and professional growth',
    icon: ChartBarIcon,
  },
  {
    name: 'Community Development',
    description:
      'Infrastructure development projects (roads, sanitation facilities, etc.). Environmental conservation initiatives. Disaster relief and rehabilitation efforts. ',
    icon: UsersIcon,
  },
]

export default function Services() {
  return (
    <div className="bg-transparent py-24 sm:py-32">
        <div
          className="absolute inset-x-0 top-[30rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[35rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-fuchsia-600 to-purple-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.5% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">We help you</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Services Offered
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-slate-100 py-6 rounded-lg pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-230rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-100rem)]"
          aria-hidden="true"
        >
          <div
            className="relative right-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-600 to-cyan-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  )
}

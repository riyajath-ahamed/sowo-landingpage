import React from "react";

import { ChatBubbleLeftRightIcon, ArrowTrendingUpIcon ,UserIcon, UsersIcon ,RocketLaunchIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Compassion',
    description:
      'We approach every individual with empathy and kindness, striving to understand and address their needs.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Integrity',
    description: 'We uphold the highest standards of honesty, transparency, and accountability in all our endeavors',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Collaboration',
    description: 'We believe in the power of partnerships and actively collaborate with government agencies, NGOs, and local communities to maximize our impact.',
    icon: UserIcon,
  },
  {
    name: 'Empowerment',
    description: 'We empower individuals to become agents of change in their own lives and communities, fostering self-reliance and resilience.',
    icon: UsersIcon,
  },
  {
    name: 'Innovation',
    description: 'We continuously seek innovative solutions to social challenges, adapting to changing needs and circumstances',
    icon: RocketLaunchIcon,
  },
]

 const Cta = () => {
    return (
      <div className="overflow-hidden bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Motto</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Core Values</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://i.pinimg.com/564x/1d/de/42/1dde42a0a6063f4a5719381531f2c846.jpg"
            alt="Product screenshot"
            className="w-[18rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[37rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>

    )
  }

export default Cta;
  
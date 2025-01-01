"useclient";

import { RiCustomerService2Line } from "@react-icons/all-files/ri/RiCustomerService2Line";
import { MdSecurity } from "@react-icons/all-files/md/MdSecurity";
import { FaRupeeSign } from "@react-icons/all-files/fa/FaRupeeSign";
import { IoHome } from "@react-icons/all-files/io5/IoHome";

const features = [
  {
    name: 'Excellent customer supoort',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: RiCustomerService2Line,
  },
  {
    name: 'Competetive pricing',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: FaRupeeSign,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: MdSecurity,
  },
  {
    name: 'Product delivery',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: IoHome,
  },
]

export default function ServiceHighlight() {
  return (
    <div className="bg-base-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl text-neutral">
            What makes us different from our competetion
          </p>
          <p className="mt-6 text-lg/8 text-gray-500">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-neutral">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-xl bg-neutral">
                    <feature.icon aria-hidden="true" className="size-6 text-gray-300"/>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

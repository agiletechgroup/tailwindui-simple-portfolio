import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function DisclosureButton({title}) {
  return (
    <>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-zinc-800 hover:text-heal-500 dark:text-teal-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>{title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pt-2 pb-2 text-sm text-gray-500">
                <div className='w-full rounded-md bg-white py-1 text-base focus:outline-none sm:text-sm'>
                    <div className='cursor-default select-none py-2 pl-4 hover:text-zinc-600 hover:bg-zinc-100'>New Shipment</div>
                    <div className='cursor-default select-none py-2 pl-4 hover:text-zinc-600 hover:bg-zinc-100'>Bulk Order</div>
                    <div className='cursor-default select-none py-2 pl-4 hover:text-zinc-600 hover:bg-zinc-100'>Recover Order</div>
                    <div className='cursor-default select-none py-2 pl-4 hover:text-zinc-600 hover:bg-zinc-100'>Tracking</div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    </>
  )
}

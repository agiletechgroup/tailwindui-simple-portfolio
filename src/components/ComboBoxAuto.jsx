import React from "react";
import { useState } from "react";
import { CheckIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Combobox, Transition } from "@headlessui/react";
import { Fragment } from "react";


export default function ComboBoxAuto ({data, replaceText}) {
    const [selected, setSelected] = useState(data[0])
    const [query, setQuery] = useState('')

    const filteredPeople =
    query === ''
      ? data
      : data.filter((person) =>
          data.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

    return (
        <>
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative">
                    <div className="relative w-full cursor-default overflow-hidden rounded-md bg-white border text-left sm:text-sm">
                        <Combobox.Input
                        className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
                        displayValue={(person) => person.name}
                        onChange={(event) => setQuery(event.target.value)}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <MagnifyingGlassIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredPeople.length === 0 && query !== '' ? (
                            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                            Nothing found.
                            </div>
                        ) : (
                            filteredPeople.map((person) => (
                            <Combobox.Option
                                key={person.id}
                                className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active ? 'bg-gray-100 text-black' : 'text-zinc-400'
                                }`
                                }
                                value={person}
                            >
                                {({ selected, active }) => (
                                <>
                                    <span
                                    className={`block truncate ${
                                        selected ? 'font-medium' : 'font-normal'
                                    }`}
                                    >
                                    {person.name}
                                    </span>
                                    {selected ? (
                                    <span
                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                        active ? 'text-black' : 'text-gray-600'
                                        }`}
                                    >
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    ) : null}
                                </>
                                )}
                            </Combobox.Option>
                            ))
                        )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </>
    )
}
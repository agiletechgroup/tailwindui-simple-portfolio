import { Container } from "@/components/Container";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Fedex from '@/images/logos/fedex.svg';
import Frame from '@/images/logos/frame.svg';
import Dhl from '@/images/logos/dhl.svg';
import Ups from '@/images/logos/ups.svg';
import Group from '@/images/logos/group.svg';
import {PlusCircleIcon} from '@heroicons/react/24/outline'
import PackageLensImage from '@/images/icons/package-lens.svg';
import BoxScaleImage from '@/images/icons/box-scale.svg';
import ComboBoxAuto from "@/components/ComboBoxAuto";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const data = [
    { id: 1, name: '967 Summer Dr.New York, NY 10029' },
    { id: 2, name: '7314 Illinois Ave.Buffalo, NY 14224' },
    { id: 3, name: '221 Washington StreetBrooklyn, NY 11203' },
    { id: 4, name: '93 High StreetBronx, NY 10461' },
  ]

export default function Shipment() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

    return (
        <>
        <Head>
          <title>
            New Shipment
          </title>
          <meta
            name="description"
            content="Services, CSV Import Tracking Package Pickup"
          />
        </Head>
        <Container className="mt-9">
          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <div className="max-w-3xl">
                <div className="mx-10">
                    <p className="text-2xl font-medium tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                      <span className="text-sky-400">Privacy-first</span>, Print and Ship From Home Using <span className="text-sky-400">Cryptocurrency</span>
                    </p>
                    <p className="mt-6 text-base text-zinc-800 dark:text-zinc-300">
                        Buy and print postage fast from home with Bitcoin, Monero and other 50+ cryptocurrencies
                    </p>
                </div>
              </div>
              <div className="mx-6 mt-4">
                    <div className="py-8 px-4 rounded-xl border">
                        <p className="text-zinc-800 dark:text-zinc-300 text-xl">Retail Postage Price Calculator</p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Calculate shipping cost bracket on order value or the total weight of item</p>

                        <div className="mt-8">
                            <p className="text-sm font-bold"> Select a Carrier</p>
                            <div className="w-full flex mt-2">
                                <CarrierCard imageUrl={Fedex} />
                                <CarrierCard imageUrl={Frame} />
                                <CarrierCard imageUrl={Dhl} />
                                <CarrierCard imageUrl={Ups} />
                                <CarrierCard imageUrl={Group} />
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="grid grid-cols-3 divide-x-[2px]">
                                <div className="pr-2">
                                    <p className="text-sm font-bold"> Define the Package</p>
                                    <div className="w-full relative border rounded-md px-2 py-1 flex">
                                        <Image className="my-auto" src={PackageLensImage} width={50}></Image>
                                        <div className="text-sm text-zinc-600 dark:text-zinc-400 my-auto">
                                            Select size and weight
                                        </div>
                                            
                                        <div onClick={openModal} className="absolute inset-y-0 right-0 flex items-center pr-2" >
                                            <PlusCircleIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <p className="text-sm font-bold"> From </p>
                                    <ComboBoxAuto data={data} replaceText={"Search Pickup Destination"}></ComboBoxAuto>
                                </div>
                                <div className="px-2">
                                    <p className="text-sm font-bold"> To </p>
                                    <ComboBoxAuto data={data} replaceText={"Search Delivery Destination"}></ComboBoxAuto>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button className="inline-flex items-center gap-2 justify-center rounded-lg py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-sky-600 text-white">Calculate Postage</button>
                        </div>
                    </div>
                </div>
          </div>
        </Container>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-30" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                            as="h3"
                            className="text-lg font-bold leading-6 text-gray-900 text-center"
                        >
                            Define the Package
                        </Dialog.Title>
                        <div className="mt-4">
                            <Image className="mx-auto" alt="image" src={BoxScaleImage} width={150} />
                        </div>
                        <div className="mt-4">
                            <p className="font-bold text-zinc-600">Demensions</p>
                            <div className="mt-2 w-full flex justify-between">
                                <input className="border px-2 py-1 block w-40" placeholder="Length"></input>
                                <span className="text-sm my-auto">X</span>
                                <input className="border px-2 py-1 block w-40" placeholder="Width"></input>
                                <span className="text-sm my-auto">X</span>
                                <input className="border px-2 py-1 block w-40" placeholder="Height"></input>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="font-bold text-zinc-600">Weight</p>
                            <div className="mt-2 grid grid-cols-2 gap-4">
                                <div>
                                    <input className="border w-full px-2 py-1 block" placeholder="Lbs"></input>
                                </div>
                                <div>
                                    <input className="border w-full px-2 py-1 block" placeholder="Oz"></input>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-sm text-zinc-500">
                                We recommend over-estimating the weight of your package so that it doesn't get returned back to you for underpayment.
                            </p>
                        </div>

                        <div className="mt-4 w-full flex">
                            <button
                            type="button"
                            className="mx-auto inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                            >
                            Confirm Package Defination
                            </button>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
      </>
    )
}

export function CarrierCard({imageUrl}){
    return (<>
        <div className="mr-2 px-3 rounded-md border flex cursor-pointer">
            <Image className="my-auto" alt="image" src={imageUrl} width={50}></Image>
        </div>
    </>)
}
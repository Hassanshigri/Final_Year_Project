"use client";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import useAccordion from "@/components/hooks/useAccordion";
import Image from "next/image";
import Link from "next/link";
import Header_01 from "@/components/header/Header_01";

const Home_4 = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);
  const [activeIndex, handleAccordion] = useAccordion();
  const [activeIndexTwo, handleAccordionTwo] = useAccordion();

  return (
    <>
      <main className="main-wrapper relative overflow-hidden bg-black">
        <Header_01/>
        {/*...::: Hero Section Start :::... */}
        <section id="hero-section">
          <div className="relative z-[1] overflow-hidden text-center text-white">
            {/* Section Spacer */}
            <div className="bg-[url('/assets/img_placeholder/th-4/hero-bg2.jpg')] bg-cover bg-center bg-no-repeat pb-20 pt-28 md:pb-[265px] md:pt-40 lg:pt-44 xl:pt-[224px]">
              {/* Section Container */}
              <div className="global-container">
                <h1 className="jos mb-6 font-spaceGrotesk leading-none -tracking-[3px] text-white">
                  Code Canvas - Convert Your Sketch into Code{" "}
                </h1>
                <div className="mx-auto max-w-[1090px]">
                  <p className="leading-[1.33] lg:text-xl xl:text-2xl">
                    We offer you services to convert your Sketches into HTML
                    Code with best recommendations
                  </p>
                </div>
                <div className="relative mx-auto flex h-[40px] max-w-[500px] items-center justify-center overflow-hidden rounded mt-4">
                  <Link
                    rel="noopener noreferrer"
                    href="/chat"
                    className="button inline-block h-full rounded border-none bg-[#4868a2] py-3 text-center text-white after:border-none after:bg-black"
                  >
                    Get Started
                  </Link>
                </div>

                {/* </form> */}
                <div className="jos mt-4 flex items-center justify-center gap-x-[10px] text-center text-base"></div>
              </div>
              {/* Section Container */}
            </div>
            {/* Background Gradient */}
            <div className="absolute left-1/2 top-[80%] -z-[1] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#39FF14] to-[#37ff1467] blur-[250px]"></div>
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Hero Section End :::... */}
        {/*...::: Promo Section Start :::... */}
        <div id="promo-section">
          <div className="relative z-[1] pt-20 md:-mt-[135px] md:pt-0">
            {/* Section Container */}
            <div className="global-container">
              <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <li
                  className="jos rounded-[10px] bg-[#121212] p-[30px] text-white"
                  data-jos_delay="0.1"
                >
                  <div className="mb-6 flex items-center gap-x-6">
                    <div className="h-[50px] w-[50px]">
                      <Image
                        src="/assets/img_placeholder/1.png"
                        alt="icon-black-promo"
                        width={50}
                        height={50}
                        className="h-full w-auto"
                      />
                    </div>
                    <div className="flex-1 font-spaceGrotesk text-3xl leading-[1.33]">
                      Accurate Code Conversion
                    </div>
                  </div>
                  <p className="text-[21px] leading-[1.4]">
                    Leverage AI to ensure precise translation of your sketches
                    into responsive and clean HTML/CSS code.
                  </p>
                </li>
                <li
                  className="jos rounded-[10px] bg-[#121212] p-[30px] text-white"
                  data-jos_delay="0.2"
                >
                  <div className="mb-6 flex items-center gap-x-6">
                    <div className="h-[50px] w-[50px]">
                      <Image
                        src="/assets/img_placeholder/2.png"
                        alt="icon-black-promo"
                        width={50}
                        height={50}
                        className="h-full w-auto"
                      />
                    </div>
                    <div className="flex-1 font-spaceGrotesk text-3xl leading-[1.33]">
                      Tailored Designs
                    </div>
                  </div>
                  <p className="text-[21px] leading-[1.4]">
                    Get customized recommendations for optimizing your designs
                    into fully functional front-end code.
                  </p>
                </li>
                <li
                  className="jos rounded-[10px] bg-[#121212] p-[30px] text-white"
                  data-jos_delay="0.3"
                >
                  <div className="mb-6 flex items-center gap-x-6">
                    <div className="h-[50px] w-[50px]">
                      <Image
                        src="/assets/img_placeholder/3.png"
                        alt="icon-black-promo"
                        width={50}
                        height={50}
                        className="h-full w-auto"
                      />
                    </div>
                    <div className="flex-1 font-spaceGrotesk text-3xl leading-[1.33]">
                      Faster Turnaround
                    </div>
                  </div>
                  <p className="text-[21px] leading-[1.4]">
                    Automate and accelerate the process of converting sketches
                    to code, saving you valuable time.
                  </p>
                </li>
              </ul>
            </div>
            {/* Section Container */}
          </div>
        </div>
        {/*...::: Promo Section End :::... */}
        {/*...::: Content Section-1 Start :::... */}
        <section id="section-content-1">
          {/* Section Spacer */}
          <div className="py-20 xl:py-[130px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid items-center gap-10 md:grid-cols-[minmax(0,_1fr)_1.3fr] lg:gap-[60px] xl:gap-x-[94px]">
                <div className="jos" data-jos_animation="fade-left">
                  <div className="overflow-hidden rounded-[10px]">
                    <Image
                      src="/assets/img_placeholder/th-4/content-img-1.png"
                      alt="content-img-2"
                      width={550}
                      height={550}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
                <div className="jos" data-jos_animation="fade-right">
                  {/* Section Content Block */}
                  <div className="mb-6">
                    <h2 className="font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]">
                      Transform Sketches into Responsive Interfaces with AI
                    </h2>
                  </div>
                  {/* Section Content Block */}
                  <div>
                    <p className="mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[21px] text-white">
                      Designers and developers worldwide rely on our AI-powered
                      platform to seamlessly convert creative sketches into
                      responsive, pixel-perfect HTML and CSS code.
                    </p>
                    <p className="mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[21px] text-white">
                      Harness the power of AI to supercharge your workflow,
                      translating your ideas into clean, efficient code
                      effortlessly. Let us help you bridge the gaps between
                      design and development with unmatched precision and speed.
                    </p>
                    <Link
                      rel="noopener noreferrer"
                      href="/chat"
                      className="button inline-block h-full rounded border-white bg-[#4868a2] py-3 text-base text-white after:border-none after:bg-black"
                    >
                      Explore the Platform
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Content Section-1 End :::... */}
        {/*...::: Content Section-2 Start :::... */}
        <section id="section-content-2">
          {/* Section Spacer */}
          <div className="py-20 xl:py-[130px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid items-center gap-10 md:grid-cols-[1.1fr_minmax(0,_1fr)] lg:gap-[60px] xl:gap-x-[110px]">
                <div className="jos order-2" data-jos_animation="fade-left">
                  <div className="overflow-hidden rounded-[10px]">
                    <Image
                      src="/assets/img_placeholder/th-4/content-img-2.png"
                      alt="content-img-2"
                      width={550}
                      height={550}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
                <div className="jos order-1" data-jos_animation="fade-right">
                  {/* Section Content Block */}
                  <div className="mb-6">
                    <h2 className="font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]">
                      Bring Your Sketches to Life with Tailored Code Conversion{" "}
                    </h2>
                  </div>
                  {/* Section Content Block */}
                  <div className="">
                    <p className="mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[20px] text-white">
                      Our AI-driven platform allows organizations to bring their
                      ideas to life by using the following prompts:
                    </p>
                    <ul className="flex flex-col gap-y-5 font-spaceGrotesk text-xl leading-tight tracking-tighter lg:mt-12 lg:text-[20px] text-white">
                      <li className="flex items-start gap-x-3">
                        <div className="mt-[2.5px] h-[30px] w-[30px]">
                          <Image
                            src="/assets/img_placeholder/th-4/icon-green-badge-check.svg"
                            alt="check-circle"
                            width={30}
                            height={30}
                            className="h-full w-full"
                          />
                        </div>
                        Prompt Text - Define your designs content and messaging.{" "}
                      </li>
                      <li className="flex items-start gap-x-3">
                        <div className="mt-[2.5px] h-[30px] w-[30px]">
                          <Image
                            src="/assets/img_placeholder/th-4/icon-green-badge-check.svg"
                            alt="check-circle"
                            width={30}
                            height={30}
                            className="h-full w-full"
                          />
                        </div>
                        Primary & Secondary Colors - Set the perfect color
                        scheme for your project.{" "}
                      </li>
                      <li className="flex items-start gap-x-3">
                        <div className="mt-[2.5px] h-[30px] w-[30px]">
                          <Image
                            src="/assets/img_placeholder/th-4/icon-green-badge-check.svg"
                            alt="check-circle"
                            width={30}
                            height={30}
                            className="h-full w-full"
                          />
                        </div>
                        Font Family - Choose the perfect typography to match
                        your brand style.{" "}
                      </li>
                      <li className="flex items-start gap-x-3">
                        <div className="mt-[2.5px] h-[30px] w-[30px]">
                          <Image
                            src="/assets/img_placeholder/th-4/icon-green-badge-check.svg"
                            alt="check-circle"
                            width={30}
                            height={30}
                            className="h-full w-full"
                          />
                        </div>
                        Sketch - Upload your sketches for precise, responsive
                        HTML/CSS conversion.{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Content Section-2 End :::... */}
        {/* Separator */}
        <div className="global-container overflow-hidden">
          <div className="h-[1px] w-full bg-[#363636]" />
        </div>
        {/* Separator */}
        {/*...::: Service Section Start :::... */}
        <section id="service-section">
          {/* Section Spacer */}
          <div className="pb-20 pt-20 xl:pb-[130px] xl:pt-[150px]">
            {/* Section Container */}
            <div className="global-container">
              {/* Section Content Block */}
              <div className="jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]">
                <h2 className="font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]">
                  Get all the tools to tackle cybersecurity together
                </h2>
              </div>
              {/* Section Content Block */}
              {/* Service List */}
              <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Service Item */}
                <li
                  className="jos group rounded-[10px] bg-[#121212] p-[30px]"
                  data-jos_delay="0.1"
                >
                  <div className="mb-8 flex items-center gap-x-6">
                    <div className="h-[50px] w-[50px]">
                      <Image
                        src="/assets/img_placeholder/th-4/icon-green-service-2.svg"
                        alt="icon-green-service"
                        width={50}
                        height={50}
                        className="h-full w-auto"
                      />
                    </div>
                    <div className="flex-1 font-spaceGrotesk text-3xl leading-[1.33] text-white">
                      Sketch Analysis
                    </div>
                  </div>
                  <p className="mb-7 text-[21px] leading-[1.4] text-white">
                    AI analyzes your uploaded sketches to identify key elements
                    and layout for precise HTML/CSS conversion.
                  </p>
                  <Link
                    href="/service-details"
                    className="relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden"
                  >
                    <Image
                      src="/assets/img_placeholder/th-4/icon-white-arrow-right.svg"
                      alt="icon-white-arrow-right"
                      width={30}
                      height={30}
                      className="relative left-0 transition-all duration-300 group-hover:left-full"
                    />
                    <Image
                      src="/assets/img_placeholder/th-4/icon-green-arrow-right.svg"
                      alt="icon-white-arrow-right"
                      width={30}
                      height={30}
                      className="absolute -left-full transition-all duration-300 group-hover:left-0"
                    />
                  </Link>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li
                  className="jos group rounded-[10px] bg-[#121212] p-[30px]"
                  data-jos_delay="0.2"
                >
                  <div className="mb-8 flex items-center gap-x-6">
                    <div className="h-[50px] w-[50px]">
                      <Image
                        src="/assets/img_placeholder/th-4/icon-green-service-1.svg"
                        alt="icon-green-service"
                        width={50}
                        height={50}
                        className="h-full w-auto"
                      />
                    </div>
                    <div className="flex-1 font-spaceGrotesk text-3xl leading-[1.33] text-white">
                      Template Recommendations
                    </div>
                  </div>
                  <p className="mb-7 text-[21px] leading-[1.4] text-white">
                    Receive 3 tailored template recommendations, each with
                    variations, to match your sketch&#39;s style and purpose.
                  </p>
                  <Link
                    href="/service-details"
                    className="relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden"
                  >
                    <Image
                      src="/assets/img_placeholder/th-4/icon-white-arrow-right.svg"
                      alt="icon-white-arrow-right"
                      width={30}
                      height={30}
                      className="relative left-0 transition-all duration-300 group-hover:left-full"
                    />
                    <Image
                      src="/assets/img_placeholder/th-4/icon-green-arrow-right.svg"
                      alt="icon-white-arrow-right"
                      width={30}
                      height={30}
                      className="absolute -left-full transition-all duration-300 group-hover:left-0"
                    />
                  </Link>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li
                  className="jos group rounded-[10px] bg-[#121212] p-[30px]"
                  data-jos_delay="0.3"
                >
                  <div className="mb-8 flex items-center gap-x-6">
                    <div className="h-[50px] w-[50px]">
                      <Image
                        src="/assets/img_placeholder/th-4/icon-green-service-3.svg"
                        alt="icon-green-service"
                        width={50}
                        height={50}
                        className="h-full w-auto"
                      />
                    </div>
                    <div className="flex-1 font-spaceGrotesk text-3xl leading-[1.33] text-white">
                      Font Family Integration
                    </div>
                  </div>
                  <p className="mb-7 text-[21px] leading-[1.4] text-white">
                    Easily integrate your preferred font family into the code
                    for a cohesive design language.
                  </p>
                  <Link
                    href="/service-details"
                    className="relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden"
                  >
                    <Image
                      src="/assets/img_placeholder/th-4/icon-white-arrow-right.svg"
                      alt="icon-white-arrow-right"
                      width={30}
                      height={30}
                      className="relative left-0 transition-all duration-300 group-hover:left-full"
                    />
                    <Image
                      src="/assets/img_placeholder/th-4/icon-green-arrow-right.svg"
                      alt="icon-white-arrow-right"
                      width={30}
                      height={30}
                      className="absolute -left-full transition-all duration-300 group-hover:left-0"
                    />
                  </Link>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li
                  className="jos group rounded-[10px] bg-[#121212] p-[30px]"
                  data-jos_delay="0.4"
                >
                  <div className="mb-8 flex items-center gap-x-6">
                    <div className="h-[50px] w-[50px]">
                      <Image
                        src="/assets/img_placeholder/th-4/icon-green-service-4.svg"
                        alt="icon-green-service"
                        width={50}
                        height={50}
                        className="h-full w-auto"
                      />
                    </div>
                    <div className="flex-1 font-spaceGrotesk text-3xl leading-[1.33] text-white">
                      Responsive Code Generation
                    </div>
                  </div>
                  <p className="mb-7 text-[21px] leading-[1.4] text-white">
                    Transform your sketches into clean, responsive HTML/CSS code
                    optimized for all devices.
                  </p>
                  <Link
                    href="/service-details"
                    className="relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden"
                  >
                    <Image
                      src="/assets/img_placeholder/th-4/icon-white-arrow-right.svg"
                      alt="icon-white-arrow-right"
                      width={30}
                      height={30}
                      className="relative left-0 transition-all duration-300 group-hover:left-full"
                    />
                    <Image
                      src="/assets/img_placeholder/th-4/icon-green-arrow-right.svg"
                      alt="icon-white-arrow-right"
                      width={30}
                      height={30}
                      className="absolute -left-full transition-all duration-300 group-hover:left-0"
                    />
                  </Link>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li
                  className="jos group rounded-[10px] bg-[#121212] p-[30px]"
                  data-jos_delay="0.5"
                >
                  <div className="mb-8 flex items-center gap-x-6">
                    <div className="h-[50px] w-[50px]">
                      <Image
                        src="/assets/img_placeholder/th-4/icon-green-service-5.svg"
                        alt="icon-green-service"
                        width={50}
                        height={50}
                        className="h-full w-auto"
                      />
                    </div>
                    <div className="flex-1 font-spaceGrotesk text-3xl leading-[1.33] text-white">
                      Code Analyzation & Preview
                    </div>
                  </div>
                  <p className="mb-7 text-[21px] leading-[1.4] text-white">
                    Analyze the generated code and preview how it renders in
                    real-time, ensuring quality and accuracy.
                  </p>
                  <Link
                    href="/service-details"
                    className="relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden"
                  >
                    <Image
                      src="/assets/img_placeholder/th-4/icon-white-arrow-right.svg"
                      alt="icon-white-arrow-right"
                      width={30}
                      height={30}
                      className="relative left-0 transition-all duration-300 group-hover:left-full"
                    />
                    <Image
                      src="/assets/img_placeholder/th-4/icon-green-arrow-right.svg"
                      alt="icon-white-arrow-right"
                      width={30}
                      height={30}
                      className="absolute -left-full transition-all duration-300 group-hover:left-0"
                    />
                  </Link>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li
                  className="jos group rounded-[10px] bg-[#121212] p-[30px]"
                  data-jos_delay="0.6"
                >
                  <div className="mb-8 flex items-center gap-x-6">
                    <div className="h-[50px] w-[50px]">
                      <Image
                        src="/assets/img_placeholder/th-4/icon-green-service-6.svg"
                        alt="icon-green-service"
                        width={50}
                        height={50}
                        className="h-full w-auto"
                      />
                    </div>
                    <div className="flex-1 font-spaceGrotesk text-3xl leading-[1.33] text-white">
                      Color Scheme Customization
                    </div>
                  </div>
                  <p className="mb-7 text-[21px] leading-[1.4] text-white">
                    Select your primary and secondary colors to define a
                    cohesive design language across your HTML/CSS.
                  </p>
                  <Link
                    href="/service-details"
                    className="relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden"
                  >
                    <Image
                      src="/assets/img_placeholder/th-4/icon-white-arrow-right.svg"
                      alt="icon-white-arrow-right"
                      width={30}
                      height={30}
                      className="relative left-0 transition-all duration-300 group-hover:left-full"
                    />
                    <Image
                      src="/assets/img_placeholder/th-4/icon-green-arrow-right.svg"
                      alt="icon-white-arrow-right"
                      width={30}
                      height={30}
                      className="absolute -left-full transition-all duration-300 group-hover:left-0"
                    />
                  </Link>
                </li>
                {/* Service Item */}
              </ul>
              {/* Service List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Service Section End :::... */}
        {/*...::: Text Slide Section Start :::... */}
        <div id="text-slide-section">
          <div className="bg-[#4868a2] py-5">
            <div className="horizontal-slide-from-left-to-right grid grid-flow-col whitespace-nowrap">
              <div className="flex text-4xl font-bold uppercase leading-5 text-black">
              #SketchToCode #DesignToDevelopment #WebDesign #HTMLCSS #AI #CodeAutomation #ResponsiveDesign              </div>
              <div className="flex text-4xl font-bold uppercase leading-5 text-black">
              #SketchToCode #DesignToDevelopment #WebDesign #HTMLCSS #AI #CodeAutomation #ResponsiveDesign              </div>
              <div className="flex text-4xl font-bold uppercase leading-5 text-black">
              #SketchToCode #DesignToDevelopment #WebDesign #HTMLCSS #AI #CodeAutomation #ResponsiveDesign              </div>
            </div>
          </div>
        </div>
        {/*...::: Text Slide Section End :::... */}

        {/*...::: Content Section-4 Start :::... */}
        <section id="content-section-4">
          {/* Section Spacer */}
          <div className="pb-20 xl:pb-[150px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,_.75fr)_1fr] lg:gap-20 xl:gap-24">
                {/* Process Accordion */}
                <ul
                  className="accordion tab-content flex flex-col gap-y-6"
                  id="process-accordian"
                >
                  {/* Accordion items */}
                  <li
                    className={`jos accordion-item rounded-[10px] bg-[#121212] px-7 py-[30px] ${
                      activeIndex == 0 ? "active" : ""
                    }`}
                    data-jos_delay="0.1"
                  >
                    <div
                      onClick={() => handleAccordion(0)}
                      className="accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[1px] lg:text-3xl"
                    >
                      <div className="mb-3 flex items-center gap-x-6">
                        <Image
                          src="/assets/img_placeholder/th-4/icon-green-process-accordion-1.svg"
                          alt="icon-green-process-accordion"
                          width={36}
                          height={50}
                          className="h-[50px] w-auto"
                        />
                        <h5 className="font-spaceGrotesk text-white">
                          Create a free account
                        </h5>
                      </div>
                      <div className="accordion-icon is-chevron">
                        <Image
                          src="/assets/img_placeholder/th-4/icon-white-cheveron-down.svg"
                          alt="chevron"
                          width={30}
                          height={30}
                        />
                        <Image
                          src="/assets/img_placeholder/th-4/icon-green-cheveron-up.svg"
                          alt="chevron"
                          width={30}
                          height={30}
                          className="absolute inset-0"
                        />
                      </div>
                    </div>
                    <div className="accordion-content disappear translate-y-3 text-lg leading-[1.42] lg:text-[21px] text-white">
                      <p>Sign up and upload your sketches to kickstart the transformation into fully responsive HTML/CSS code, customized to your design needs.
                      </p>
                    </div>
                  </li>
                  {/* Accordion items */}
                  {/* Accordion items */}
                  <li
                    className={`jos accordion-item rounded-[10px] bg-[#121212] px-7 py-[30px] ${
                      activeIndex == 1 ? "active" : ""
                    }`}
                    data-jos_delay="0.1"
                  >
                    <div
                      onClick={() => handleAccordion(1)}
                      className="accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[1px] lg:text-3xl"
                    >
                      <div className="mb-3 flex items-center gap-x-6">
                        <Image
                          src="/assets/img_placeholder/th-4/icon-green-process-accordion-2.svg"
                          alt="icon-green-process-accordion"
                          width={36}
                          height={50}
                          className="h-[50px] w-auto"
                        />
                        <h5 className="font-spaceGrotesk text-white">
                          Give best prompts
                        </h5>
                      </div>
                      <div className="accordion-icon is-chevron">
                        <Image
                          src="/assets/img_placeholder/th-4/icon-white-cheveron-down.svg"
                          alt="chevron"
                          width={30}
                          height={30}
                        />
                        <Image
                          src="/assets/img_placeholder/th-4/icon-green-cheveron-up.svg"
                          alt="chevron"
                          width={30}
                          height={30}
                          className="absolute inset-0"
                        />
                      </div>
                    </div>
                    <div className="accordion-content disappear translate-y-3 text-lg leading-[1.42] lg:text-[21px] text-white">
                      <p>
                      Simply input your project details, and our AI-powered platform will guide you through turning your creative sketches into clean, functional code.
                      </p>
                    </div>
                  </li>
                  {/* Accordion items */}
                  {/* Accordion items */}
                  <li
                    className={`jos accordion-item rounded-[10px] bg-[#121212] px-7 py-[30px] ${
                      activeIndex == 2 ? "active" : ""
                    }`}
                    data-jos_delay="0.1"
                  >
                    <div
                      onClick={() => handleAccordion(2)}
                      className="accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[1px] lg:text-3xl"
                    >
                      <div className="mb-3 flex items-center gap-x-6">
                        <Image
                          src="/assets/img_placeholder/th-4/icon-green-process-accordion-3.svg"
                          alt="icon-green-process-accordion"
                          width={36}
                          height={50}
                          className="h-[50px] w-auto"
                        />
                        <h5 className="font-spaceGrotesk text-white">
                          Continuous improvement
                        </h5>
                      </div>
                      <div className="accordion-icon is-chevron">
                        <Image
                          src="/assets/img_placeholder/th-4/icon-white-cheveron-down.svg"
                          alt="chevron"
                          width={30}
                          height={30}
                        />
                        <Image
                          src="/assets/img_placeholder/th-4/icon-green-cheveron-up.svg"
                          alt="chevron"
                          width={30}
                          height={30}
                          className="absolute inset-0"
                        />
                      </div>
                    </div>
                    <div className="accordion-content disappear translate-y-3 text-lg leading-[1.42] lg:text-[21px] text-white">
                      <p>Influence our tools to constantly refine your design-to-code process, ensuring each project is more accurate and efficient than the last.
                      </p>
                    </div>
                  </li>
                  {/* Accordion items */}
                </ul>
                {/* Process Accordion */}
                <div className="jos" data-jos_animation="fade-right">
                  {/* Section Content Block */}
                  <div className="mb-6">
                    <h2 className="font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]">
                    Optimize Your Workflow
                                        </h2>
                  </div>
                  {/* Section Content Block */}
                  <div>
                    <p className="mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[21px] text-white">
                    With our tools, streamline your design-to-code process, reduce manual effort, and quickly turn your creative sketches into fully functional code.
                    </p>
                  </div>
                  {/* Counter Scroll */}
                  <ul className="mt-[50px] grid grid-cols-1 gap-10 gap-y-5 text-center sm:grid-cols-3">
                    {/* Counter Items */}
                    <li>
                      <h3
                        className="font-spaceGrotesk text-5xl leading-[1.05] tracking-[-1px] text-[#4868a2] md:text-5xl lg:text-6xl xl:text-[70px]"
                        data-module="countup"
                      >
                        <span className="start-number" data-countup-number={100}>
                          100
                        </span>
                        %
                      </h3>
                      <span className="mt-4 block text-[21px] font-normal text-white">
                      Enhance Design Accuracy


                      </span>
                    </li>
                    {/* Counter Items */}
                    {/* Counter Items */}
                    <li>
                      <h3
                        className="font-spaceGrotesk text-5xl leading-[1.05] tracking-[-1px] text-[#4868a2] md:text-5xl lg:text-6xl xl:text-[70px]"
                        data-module="countup"
                      >
                        <span className="start-number" data-countup-number={80}>
                        80
                        </span>
                        %
                      </h3>
                      <span className="mt-4 block text-[21px] font-normal text-white">
                      Save Time on Development
                      </span>
                    </li>
                    {/* Counter Items */}
                    {/* Counter Items */}
                    <li>
                      <h3
                        className="font-spaceGrotesk text-5xl leading-[1.05] tracking-[-1px] text-[#4868a2] md:text-5xl lg:text-6xl xl:text-[70px]"
                        data-module="countup"
                      >
                        <span className="start-number" data-countup-number={75}>
                          75
                        </span>
                        %
                      </h3>
                      <span className="mt-4 block text-[21px] font-normal text-white">
                      Maximize Code Efficiency
                      </span>
                    </li>
                    {/* Counter Items */}
                  </ul>
                  {/* Counter Scroll */}
                </div>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Content Section-4 End :::... */}
        {/* Separator */}
        <div className="global-container overflow-hidden">
          <div className="h-[1px] w-full bg-[#363636]" />
        </div>
        {/* Separator */}
        {/*...::: FAQ Section Start :::... */}
        <section className="faq-section">
  {/* Section Spacer */}
  <div className="py-20 xl:pb-[150px] xl:pt-[130px]">
    {/* Section Container */}
    <div className="global-container">
      {/* Section Content Block */}
      <div className="jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]">
        <h2 className="font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]">
          Our experts are able to answer all your questions
        </h2>
      </div>
      {/* Section Content Block */}
      {/* Accordion*/}
      <ul className="accordion flex flex-col gap-y-6">
        {/* FAQ 1 */}
        <li
          className={`jos accordion-item is-2 rounded-[10px] bg-[#121212] px-7 py-[30px] ${activeIndexTwo === 0 ? "active" : ""}`}
          data-jos_delay="0.1"
        >
          <div onClick={() => handleAccordionTwo(0)} className="accordion-header mb-[10px] flex items-center justify-between text-xl leading-[1.33] -tracking-[1px] lg:text-3xl">
            <h5 className="font-spaceGrotesk text-white">
              What is the Sketch to Code service?
            </h5>
            <div className="accordion-icon is-outline-green text-red">
              <span className="accordion-icon-plus" />
            </div>
          </div>
          <div className="accordion-content text-white">
            <p>
              Our platform uses AI to convert your sketches into responsive HTML/CSS code. Simply upload your design, and we’ll handle the translation, ensuring precise and efficient results for web development.
            </p>
          </div>
        </li>
        
        {/* FAQ 2 */}
        <li
          className={`jos accordion-item is-2 rounded-[10px] bg-[#121212] px-7 py-[30px] ${activeIndexTwo === 1 ? "active" : ""}`}
          data-jos_delay="0.1"
        >
          <div onClick={() => handleAccordionTwo(1)} className="accordion-header mb-[10px] flex items-center justify-between text-xl leading-[1.33] -tracking-[1px] lg:text-3xl">
            <h5 className="font-spaceGrotesk text-white">
              How does AI improve the accuracy of code conversion?
            </h5>
            <div className="accordion-icon is-outline-green">
              <span className="accordion-icon-plus" />
            </div>
          </div>
          <div className="accordion-content text-white">
            <p>
              The AI analyzes your uploaded sketches, identifying key elements and layout structure. It then translates them into clean, responsive HTML/CSS, ensuring that your design is pixel-perfect across all devices.
            </p>
          </div>
        </li>

        {/* FAQ 3 */}
        <li
          className={`jos accordion-item is-2 rounded-[10px] bg-[#121212] px-7 py-[30px] ${activeIndexTwo === 2 ? "active" : ""}`}
          data-jos_delay="0.1"
        >
          <div onClick={() => handleAccordionTwo(2)} className="accordion-header mb-[10px] flex items-center justify-between text-xl leading-[1.33] -tracking-[1px] lg:text-3xl">
            <h5 className="font-spaceGrotesk text-white">
              Can I customize the code generated from my sketches?
            </h5>
            <div className="accordion-icon is-outline-green">
              <span className="accordion-icon-plus" />
            </div>
          </div>
          <div className="accordion-content text-white">
            <p>
              Yes! You can customize elements such as the color scheme, font family, and layout. The platform provides tailored template recommendations and allows you to fine-tune the design to match your brand.
            </p>
          </div>
        </li>

        {/* FAQ 4 */}
        <li
          className={`jos accordion-item is-2 rounded-[10px] bg-[#121212] px-7 py-[30px] ${activeIndexTwo === 3 ? "active" : ""}`}
          data-jos_delay="0.1"
        >
          <div onClick={() => handleAccordionTwo(3)} className="accordion-header mb-[10px] flex items-center justify-between text-xl leading-[1.33] -tracking-[1px] lg:text-3xl">
            <h5 className="font-spaceGrotesk text-white">
              Is the generated code mobile-friendly?
            </h5>
            <div className="accordion-icon is-outline-green">
              <span className="accordion-icon-plus" />
            </div>
          </div>
          <div className="accordion-content text-white">
            <p>
              Absolutely! Our platform ensures that all code is responsive, meaning it adjusts seamlessly to different screen sizes, ensuring an optimal user experience across desktops, tablets, and smartphones.
            </p>
          </div>
        </li>

        {/* FAQ 5 */}
        <li
          className={`jos accordion-item is-2 rounded-[10px] bg-[#121212] px-7 py-[30px] ${activeIndexTwo === 4 ? "active" : ""}`}
          data-jos_delay="0.1"
        >
          <div onClick={() => handleAccordionTwo(4)} className="accordion-header mb-[10px] flex items-center justify-between text-xl leading-[1.33] -tracking-[1px] lg:text-3xl">
            <h5 className="font-spaceGrotesk text-white">
              How long does it take to convert a sketch to code?
            </h5>
            <div className="accordion-icon is-outline-green">
              <span className="accordion-icon-plus" />
            </div>
          </div>
          <div className="accordion-content text-white">
            <p>
              The process is fast and automated. With AI-powered tools, your sketches are transformed into functional HTML/CSS code in a fraction of the time it would take with manual coding, saving you valuable hours in development.
            </p>
          </div>
        </li>

        {/* FAQ 6 */}
        <li
          className={`jos accordion-item is-2 rounded-[10px] bg-[#121212] px-7 py-[30px] ${activeIndexTwo === 5 ? "active" : ""}`}
          data-jos_delay="0.1"
        >
          <div onClick={() => handleAccordionTwo(5)} className="accordion-header mb-[10px] flex items-center justify-between text-xl leading-[1.33] -tracking-[1px] lg:text-3xl">
            <h5 className="font-spaceGrotesk text-white">
              Can I preview the generated code before using it?
            </h5>
            <div className="accordion-icon is-outline-green">
              <span className="accordion-icon-plus" />
            </div>
          </div>
          <div className="accordion-content text-white">
            <p>
              Yes! You can preview the code in real-time, ensuring that the final output matches your expectations and accurately reflects the design before you implement it into your project.
            </p>
          </div>
        </li>
      </ul>
      {/* Accordion*/}
    </div>
    {/* Section Container */}
  </div>
  {/* Section Spacer */}
</section>

        {/*...::: FAQ Section End :::... */}

        {/*...::: CTA Section Start :::... */}
        <section id="cta-section">
          <div className="global-container">
            <div className="rounded-[10px] bg-[#4868a2] px-5 py-[60px] md:py-20 xl:py-[100px]">
              {/* Section Content Block */}
              <div className="jos mx-auto max-w-[500px] text-center lg:max-w-2xl xl:max-w-[840px]">
                <h2 className="font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]">
                Transform Your Sketches into Pixel-Perfect Code with AI Precision
                </h2>
              </div>
              {/* Section Content Block */}
              <div
                className="jos mt-8 flex flex-wrap justify-center gap-6 md:mt-[50px]"
                data-jos_animation="fade"
              >
                <Link
                  rel="noopener noreferrer"
                  href="login"
                  className="button inline-block h-full rounded border-2 border-transparent bg-black py-3 text-base text-[#4868a2] after:border-[#4868a2] after:bg-[#4868a2] hover:text-black"
                >
                  Get Started Now
                </Link>
                <Link
                  href="/chat"
                  className="button inline-block h-full rounded border-2 border-black bg-[#4868a2] py-3 text-base text-black after:bg-black hover:text-[#4868a2]"
                >
                  Chat Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/*...::: CTA Section End :::... */}
      </main>
    </>
  );
};

export default Home_4;

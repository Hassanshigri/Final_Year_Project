import { SignIn } from '@clerk/nextjs';
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import Image from "next/image";
import Link from "next/link";

function Login() {
  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Login Section Start :::... */}
        <section id="login-section">
          {/* Section Spacer */}
          <div className="py-40 pt-36 xl:pb-[200px] xl:pt-[180px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="mx-auto max-w-[910px] text-center">
                <h1 className="mb-[50px]">Welcome back</h1>
                <div className="block rounded-lg bg-white px-[30px] py-[50px] text-left shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] sm:px-10">
                  {/* Clerk SignIn Component */}
                  <div className="flex justify-center">
                    <SignIn 
                      path="/login" 
                      routing="path"
                      signUpUrl="/signup"
                      appearance={{
                        elements: {
                          rootBox: 'w-full',
                          card: 'w-full max-w-none shadow-none',
                          headerTitle: 'text-2xl font-bold mb-2',
                          headerSubtitle: 'text-gray-600 mb-6',
                          socialButtonsBlockButton: 'border-gray-300 hover:bg-gray-50',
                          formFieldInput: 'rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed',
                          formButtonPrimary: 'button mt-7 block rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-[#4868a2] hover:border-[#4868a2] hover:text-white',
                          footerActionText: 'text-gray-600',
                          footerActionLink: 'text-[#4868a2] hover:text-[#4868a2] font-semibold',
                        }
                      }}
                    />
                  </div>
                  
                  <div className="relative z-[1] mb-14 mt-9 text-center font-bold before:absolute before:left-0 before:top-1/2 before:-z-[1] before:h-[1px] before:w-full before:-translate-y-1/2 before:bg-[#EAEDF0]">
                    <span className="inline-block bg-white px-6">Or</span>
                  </div>
                  
                  {/* Social login buttons */}
                  <div className="flex flex-col gap-y-6">
                    <button
                      type="button"
                      className="button flex w-full justify-center gap-x-4 rounded-[50px] border-2 border-[#EAEDF0] bg-white py-4 hover:bg-slate-200"
                    >
                      <span className="hidden h-6 w-6 sm:inline-block">
                        <Image
                          src="/assets/img_placeholder/th-1/flat-color-icons-google.svg"
                          alt="flat-color-icons-google"
                          width={24}
                          height={24}
                        />
                      </span>
                      Continue with Google
                    </button>
                  </div>
                  
                  <div className="mt-10 text-center">
                    Don't have an account?{' '}
                    <Link
                      href="/signup"
                      className="text-base font-semibold hover:text-[#4868a2]"
                    >
                      Sign up here
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
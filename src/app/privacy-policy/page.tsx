import React from "react"

const Page = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <h1 className="font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl font-black">
          Privacy Policy
        </h1>

        <div className="mt-6 space-y-4 text-sm md:text-base text-muted-foreground max-w-3xl">
          <p>
            This Privacy Policy explains how Black Moon Marketing Lab collects, uses, and
            protects information you submit through our website.
          </p>

          <p>
            When you request a marketing audit, we may collect contact and business
            information such as your name, email address, phone number, company name,
            website, and any details you provide in your message.
          </p>

          <p>
            We use this information to respond to your request, evaluate whether we can
            help, and communicate about next steps. We do not sell your personal
            information.
          </p>

          <p>
            If you have questions about this policy, email us at
            {" "}
            <a className="underline" href="mailto:team@blackmooncreative.com">
              team@blackmooncreative.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}

export default Page

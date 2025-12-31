"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Award } from "lucide-react"

const AuditCallout = () => {
  return (
    <section className="py-20 overflow-x-clip">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex flex-col items-start">
            <div className="text-xs font-mono tracking-wider uppercase text-foreground">
              Top reviewed growth team | no-strings-attached audit
            </div>

            <div className="mt-4 w-full">
              <h2 className="font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                Most marketing budgets are wasted.
                <br />
                Let's fix that.
              </h2>

              <div className="mt-4 h-[2px] w-16 bg-foreground" />

              <p className="mt-6 text-sm md:text-base text-muted-foreground max-w-xl">
                We'll audit your acquisition system end to end: SEO, website, funnels, paid social, and Google Ads. We'll show you exactly what's leaking, what's working, and what to fix first.
              </p>

              <div className="mt-8">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="rounded-none bg-foreground text-background hover:bg-foreground/90">
                      Get your free marketing audit
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-center font-[family-name:var(--font-orbitron)] text-2xl sm:text-3xl font-black">
                        Get Your Free Marketing Audit
                      </DialogTitle>
                    </DialogHeader>
                    <div className="mt-2 py-6">
                      <div className="text-center text-base">
                        We are still building this.
                      </div>
                      <div className="mt-2 text-center text-sm text-muted-foreground">
                        For now, email us at team@blackmooncreative.com.
                      </div>
                      <div className="mt-6 flex justify-center">
                        <DialogClose asChild>
                          <Button className="rounded-none bg-foreground text-background hover:bg-foreground/90">
                            Close
                          </Button>
                        </DialogClose>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-6 rounded-3xl bg-foreground/10 blur-2xl" />
              <div className="relative flex items-center justify-center rounded-3xl border bg-background p-10">
                <Award className="h-24 w-24 sm:h-28 sm:w-28 text-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuditCallout

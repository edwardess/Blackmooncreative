"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
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

                    <form
                      className="mt-2"
                      onSubmit={(e) => {
                        e.preventDefault()
                      }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="audit_first_name">
                            First Name<span className="text-foreground">*</span>
                          </Label>
                          <Input id="audit_first_name" name="firstName" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="audit_last_name">
                            Last Name<span className="text-foreground">*</span>
                          </Label>
                          <Input id="audit_last_name" name="lastName" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="audit_email">
                            Email<span className="text-foreground">*</span>
                          </Label>
                          <Input id="audit_email" name="email" type="email" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="audit_phone">
                            Phone Number<span className="text-foreground">*</span>
                          </Label>
                          <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-2">
                            <Select defaultValue="ph">
                              <SelectTrigger>
                                <SelectValue placeholder="Country" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ph">Philippines</SelectItem>
                              </SelectContent>
                            </Select>
                            <Input
                              id="audit_phone"
                              name="phone"
                              placeholder="+63"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="audit_company">
                            Company Name<span className="text-foreground">*</span>
                          </Label>
                          <Input id="audit_company" name="company" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="audit_website">
                            Website<span className="text-foreground">*</span>
                          </Label>
                          <Input id="audit_website" name="website" required />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                          <Label>
                            Annual Revenue<span className="text-foreground">*</span>
                          </Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Please Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under_100k">Under $100k</SelectItem>
                              <SelectItem value="100k_500k">$100k to $500k</SelectItem>
                              <SelectItem value="500k_1m">$500k to $1M</SelectItem>
                              <SelectItem value="1m_5m">$1M to $5M</SelectItem>
                              <SelectItem value="5m_plus">$5M+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="audit_help">How may we best assist you?</Label>
                          <Textarea id="audit_help" name="message" className="min-h-28" />
                        </div>

                        <div className="md:col-span-2 flex items-start gap-2">
                          <Checkbox id="audit_privacy" />
                          <Label htmlFor="audit_privacy" className="leading-snug">
                            I agree to the{" "}
                            <a href="#" className="underline">
                              Privacy Policy
                            </a>
                            <span className="text-foreground">*</span>
                          </Label>
                        </div>
                      </div>

                      <div className="mt-8 flex justify-center">
                        <Button type="submit" className="rounded-none bg-foreground text-background hover:bg-foreground/90">
                          Submit
                        </Button>
                      </div>
                    </form>
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

"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()

  const toggleLanguage = () => {
    const newLocale = pathname.startsWith("/fr") ? "en" : "fr"
    router.push(`/${newLocale}${pathname.substring(3)}`)
  }

  return (
    <Button onClick={toggleLanguage} variant="ghost">
      {pathname.startsWith("/fr") ? "EN" : "FR"}
    </Button>
  )
}


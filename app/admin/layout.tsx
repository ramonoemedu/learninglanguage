// app/admin/layout.tsx
'use client'

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const navLinks = [
    { href: '/admin', label: 'Overview' },
    { href: '/admin/users', label: 'Users' },
    { href: '/admin/content/languages', label: 'Languages' },
    { href: '/admin/content/chapters', label: 'Chapters' },
    { href: '/admin/content/vocabulary', label: 'Vocabulary' },
    { href: '/admin/content/lessons', label: 'Lessons' },
    { href: '/admin/analytics', label: 'Analytics' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar maxWidth="full" className="border-b border-border bg-card/80 backdrop-blur-md">
        <NavbarBrand>
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-warning rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-black text-xl">A</span>
            </div>
            <p className="font-black text-foreground uppercase tracking-wider">Admin Panel</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden lg:flex gap-6" justify="center">
          {navLinks.map(link => {
            const isActive = pathname === link.href || (link.href !== '/admin' && pathname.startsWith(link.href))
            return (
              <NavbarItem key={link.href} isActive={isActive}>
                <Link 
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-tight transition-colors ${isActive ? 'text-primary' : 'text-default-500 hover:text-foreground'}`}
                >
                  {link.label}
                </Link>
              </NavbarItem>
            )
          })}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="/dashboard" variant="flat" className="font-bold uppercase text-xs">
              Exit to App
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <main className="max-w-7xl mx-auto p-6 sm:p-10">
        {children}
      </main>
    </div>
  )
}

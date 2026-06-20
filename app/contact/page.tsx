'use client'
import { useState } from 'react'
import { Mail, MessageSquare, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <main className="bg-[#F9F9FB] text-zinc-900 antialiased min-h-screen flex flex-col">
      <Cursor />
      <Navbar />

      <section className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* COLONNE GAUCHE — Pitch + infos de contact */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-semibold inline-block px-3 py-1 bg-amber-50 border border-amber-100/80 rounded-full">
                Discutons de votre projet
              </span>
              <h1
                className="text-4xl md:text-5xl font-light tracking-tight text-zinc-900 leading-[1.15]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Donnez vie à <br />
                <em className="font-light italic text-zinc-500">votre vision</em>
              </h1>
              <p className="text-zinc-500 font-light text-sm md:text-base leading-relaxed max-w-md">
                Que ce soit pour une refonte de marque, un site vitrine haute-couture ou une plateforme e-commerce fluide, nous analysons vos besoins sous 48 heures.
              </p>
            </div>

            <div className="space-y-4 pt-2">

              {/* WhatsApp placeholder */}
              <div className="bg-white border border-zinc-200/60 p-5 rounded-2xl flex items-center gap-4 shadow-sm group hover:border-zinc-300 transition-colors">
                <div className="p-3 bg-[#F9F9FB] rounded-xl text-zinc-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 group-hover:border-emerald-100 border border-transparent transition-all">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium block">
                    Ligne Directe WhatsApp
                  </span>
                  <span className="text-xs text-zinc-400 font-light italic">
                    Numéro professionnel en cours de configuration...
                  </span>
                </div>
              </div>

              {/* Email placeholder */}
              <div className="bg-white border border-zinc-200/60 p-5 rounded-2xl flex items-center gap-4 shadow-sm group hover:border-zinc-300 transition-colors">
                <div className="p-3 bg-[#F9F9FB] rounded-xl text-zinc-400 group-hover:bg-amber-50 group-hover:text-amber-600 group-hover:border-amber-100 border border-transparent transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium block">
                    Courriel Électronique
                  </span>
                  <span className="text-xs text-zinc-400 font-light italic">
                    Adresse pro (Hostinger) en cours de déploiement...
                  </span>
                </div>
              </div>

              {/* Disponibilité */}
              <div className="bg-white border border-zinc-200/60 p-5 rounded-2xl flex items-center gap-4 shadow-sm group hover:border-zinc-300 transition-colors">
                <div className="p-3 bg-[#F9F9FB] rounded-xl text-zinc-600 border border-transparent">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium block">
                    Disponibilité
                  </span>
                  <span className="text-xs text-zinc-600 font-light">
                    Service actif globalement — Réponses sous 24h/48h max.
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* COLONNE DROITE — Formulaire */}
          <div className="lg:col-span-7 bg-white border border-zinc-200/70 p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden">

            {isSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-zinc-800" style={{ fontFamily: 'var(--font-display)' }}>
                  Votre message a été transmis
                </h3>
                <p className="text-zinc-500 font-light text-xs max-w-xs mx-auto leading-relaxed">
                  Merci de nous faire confiance. Notre équipe étudie vos éléments et prendra contact avec vous très rapidement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-wider font-medium text-zinc-500">
                      Votre Nom Complet
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Mohamed"
                      className="w-full bg-[#F9F9FB] border border-zinc-200/60 rounded-xl px-4 py-3.5 text-xs font-light focus:outline-none focus:border-zinc-400 focus:bg-white transition-all text-zinc-800"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-wider font-medium text-zinc-500">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@entreprise.com"
                      className="w-full bg-[#F9F9FB] border border-zinc-200/60 rounded-xl px-4 py-3.5 text-xs font-light focus:outline-none focus:border-zinc-400 focus:bg-white transition-all text-zinc-800"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-wider font-medium text-zinc-500">
                    Nom de l&apos;Entreprise{' '}
                    <span className="text-zinc-400 font-light">(Optionnel)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Institut CÉLESTE"
                    className="w-full bg-[#F9F9FB] border border-zinc-200/60 rounded-xl px-4 py-3.5 text-xs font-light focus:outline-none focus:border-zinc-400 focus:bg-white transition-all text-zinc-800"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-wider font-medium text-zinc-500">
                    Présentation du Projet
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Décrivez vos besoins, objectifs et délais souhaités..."
                    className="w-full bg-[#F9F9FB] border border-zinc-200/60 rounded-xl px-4 py-3.5 text-xs font-light focus:outline-none focus:border-zinc-400 focus:bg-white transition-all resize-none text-zinc-800 leading-relaxed"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-zinc-950 text-white text-xs uppercase tracking-widest font-medium py-4 rounded-xl hover:bg-zinc-800 transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group"
                  >
                    Envoyer la Demande
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}

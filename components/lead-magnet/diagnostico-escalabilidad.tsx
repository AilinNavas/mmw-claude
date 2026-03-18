"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type AnswerValue = "A" | "B" | "C"
type Answers = Record<number, AnswerValue>

interface Question {
  id: number
  condition: string
  text: string
  options: { letter: AnswerValue; text: string }[]
}

const questions: Question[] = [
  {
    id: 1,
    condition: "Condición 1 · Demanda",
    text: "Si mañana recibís el doble de consultas, ¿tu sistema comercial podría manejarlo sin que vos tengas que meterte?",
    options: [
      { letter: "A", text: "Sí, mi equipo y los procesos están listos para eso." },
      { letter: "B", text: "Parcialmente — algo funciona, pero necesitaría mi intervención." },
      { letter: "C", text: "No. Sin mí, muchos leads se perderían o quedarían sin seguimiento." },
    ],
  },
  {
    id: 2,
    condition: "Condición 2 · Proceso",
    text: "¿Sabés exactamente cuántos leads entran por semana, qué canal los trae y en qué etapa se pierden?",
    options: [
      { letter: "A", text: "Sí, tengo datos claros y los reviso regularmente." },
      { letter: "B", text: "Tengo una idea aproximada, pero no datos concretos y medibles." },
      { letter: "C", text: "No. Sé que vendo bien, pero no sé qué está pasando en el embudo." },
    ],
  },
  {
    id: 3,
    condition: "Condición 3 · Sistema",
    text: "Si vos te tomaras un mes de vacaciones sin mirar el teléfono, ¿tu negocio seguiría captando y cerrando clientes?",
    options: [
      { letter: "A", text: "Sí, está estructurado para funcionar sin mí." },
      { letter: "B", text: "Funcionaría a medias — se mantiene, pero sin crecer." },
      { letter: "C", text: "No. El negocio depende demasiado de mi presencia para operar bien." },
    ],
  },
]

function ProgressBar({ currentQuestion, total, completed }: { currentQuestion: number; total: number; completed: boolean }) {
  const pct = completed ? 100 : Math.round(((currentQuestion - 1) / total) * 100)
  const text = completed ? "Completado" : `Pregunta ${currentQuestion} de ${total}`

  return (
    <div className="px-6 pt-5">
      <div className="flex justify-between text-xs text-[#7a9a80] mb-1.5">
        <span>{text}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-0.75 bg-[#1a3020] rounded-sm overflow-hidden">
        <div
          className="h-full bg-[#27DE6B] rounded-sm transition-[width] duration-400 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

function OptionButton({
  letter,
  text,
  selected,
  onClick,
}: {
  letter: string
  text: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 w-full rounded-lg mb-2.5 p-3.5 px-4 text-left cursor-pointer transition-all duration-200 border-[1.5px]",
        selected
          ? "bg-[#152b1e] border-[#27DE6B]"
          : "bg-[#1c3525] border-[#3a5e45] hover:bg-[#223f2c] hover:border-[#27DE6B]"
      )}
    >
      <span
        className={cn(
          "min-w-7 h-7 border-[1.5px] border-[#27DE6B] rounded-[5px] text-xs font-bold flex items-center justify-center shrink-0 transition-all duration-200",
          selected ? "bg-[#27DE6B] text-[#010707]" : "bg-[#0a1e10] text-[#27DE6B]"
        )}
      >
        {letter}
      </span>
      <span className="text-[15px] font-semibold text-white leading-relaxed">{text}</span>
    </button>
  )
}

function QuestionScreen({
  question,
  selectedAnswer,
  onSelectAnswer,
  onNext,
  isLast,
}: {
  question: Question
  selectedAnswer?: AnswerValue
  onSelectAnswer: (value: AnswerValue) => void
  onNext: () => void
  isLast: boolean
}) {
  return (
    <div>
      <div className="p-6 pt-7 pb-4">
        <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#27DE6B] mb-3">
          {question.condition}
        </div>
        <div className="text-[17px] font-bold leading-snug text-white mb-6">{question.text}</div>
        {question.options.map((option) => (
          <OptionButton
            key={option.letter}
            letter={option.letter}
            text={option.text}
            selected={selectedAnswer === option.letter}
            onClick={() => onSelectAnswer(option.letter)}
          />
        ))}
      </div>
      <div className="px-6 pb-4">
        <button
          onClick={onNext}
          disabled={!selectedAnswer}
          className="block w-full bg-[#27DE6B] text-[#010707] font-bold text-[15px] py-4 rounded-lg cursor-pointer transition-opacity duration-200 disabled:opacity-20 disabled:cursor-not-allowed hover:enabled:opacity-85"
        >
          {isLast ? "Ver mi resultado →" : "Siguiente →"}
        </button>
      </div>
    </div>
  )
}

function ScoreDots({ answers }: { answers: Answers }) {
  return (
    <div className="flex gap-2 mb-6">
      {[1, 2, 3].map((q) => (
        <div
          key={q}
          className={cn("w-3 h-3 rounded-full", answers[q] === "A" ? "bg-[#27DE6B]" : "bg-[#e07050]")}
        />
      ))}
    </div>
  )
}

function ResultScreen({ answers, onRestart }: { answers: Answers; onRestart: () => void }) {
  const aCount = Object.values(answers).filter((a) => a === "A").length
  const isScalable = aCount >= 2

const handleCTA = (message: string) => {
  const phone = "5493519046945" // 👈 número en formato internacional (Argentina = 54 + 9 + código + número)
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  window.open(url, "_blank")
}

  if (isScalable) {
    return (
      <div className="p-6 pt-7">
        <div className="inline-flex items-center px-3.5 py-1.5 rounded-md text-xs font-bold tracking-[0.06em] uppercase mb-5 bg-[#061a0d] border border-[#1a6b2a] text-[#27DE6B]">
          Tu empresa tiene condiciones para escalar
        </div>
        <h2 className="text-xl font-black leading-tight text-white mb-4">
          Estás más cerca de lo que creés.
          <br />
          El sistema <span className="text-[#27DE6B]">ya tiene base.</span>
        </h2>
        <ScoreDots answers={answers} />
        <p className="text-sm text-[#c0d8c8] leading-relaxed mb-6">
          Respondiste "sí" en la mayoría de las condiciones. Tu operación tiene la estructura
          necesaria para crecer. Lo que falta no es el negocio — es conectar bien las piezas y
          ponerle combustible al sistema que ya funciona.
        </p>
        <div className="h-px bg-[#1a3020] my-6" />
        <div className="text-[11px] font-bold tracking-widest uppercase text-[#27DE6B] mb-4">
          Primer paso recomendado
        </div>
        <div className="flex gap-3 mb-4 items-start">
          <div className="min-w-6 h-6 bg-[#09140E] border-[1.5px] border-[#27DE6B] text-[#27DE6B] text-xs font-bold rounded-full flex items-center justify-center shrink-0">
            1
          </div>
          <p className="text-sm text-[#d0e8d8] leading-relaxed">
            <strong className="text-white">Mapear las fugas exactas del embudo.</strong> Identificá
            dónde se pierde el 15–20% que podría cerrar y no cierra.
          </p>
        </div>
        <div className="flex gap-3 mb-4 items-start">
          <div className="min-w-6 h-6 bg-[#09140E] border-[1.5px] border-[#27DE6B] text-[#27DE6B] text-xs font-bold rounded-full flex items-center justify-center shrink-0">
            2
          </div>
          <p className="text-sm text-[#d0e8d8] leading-relaxed">
            <strong className="text-white">Escalar la captación con confianza.</strong> Con procesos
            que funcionan, invertir en Meta Ads tiene sentido. Sin ellos, más volumen = más caos.
          </p>
        </div>
        <div className="flex gap-3 mb-4 items-start">
          <div className="min-w-6 h-6 bg-[#09140E] border-[1.5px] border-[#27DE6B] text-[#27DE6B] text-xs font-bold rounded-full flex items-center justify-center shrink-0">
            3
          </div>
          <p className="text-sm text-[#d0e8d8] leading-relaxed">
            <strong className="text-white">Documentar el sistema para que funcione sin vos.</strong>{" "}
            La escalabilidad real requiere que el proceso sea replicable por tu equipo.
          </p>
        </div>
        <div className="bg-[#09140E] border border-[#1a3020] border-l-[3px] border-l-[#27DE6B] p-5 rounded-lg mt-6">
          <div className="text-[11px] font-bold tracking-widest uppercase text-[#27DE6B] mb-2">
            Siguiente movimiento
          </div>
          <p className="text-sm text-[#c0d8c8] leading-relaxed mb-4">
            Si querés saber exactamente dónde está la fuga en tu embudo y qué activar primero para
            escalar, hacemos un diagnóstico gratuito de 30 minutos — sin venta, sin promesas vagas.
          </p>
          <button
            onClick={() =>
              handleCTA("Quiero hacer el diagnóstico gratuito de 30 minutos para escalar mi empresa")
            }
            className="block w-full bg-[#27DE6B] text-[#010707] font-bold text-[15px] py-4 rounded-lg cursor-pointer transition-opacity duration-200 hover:opacity-85"
          >
            Quiero el diagnóstico gratuito ↗
          </button>
        </div>
        <button
          onClick={onRestart}
          className="inline-block bg-transparent border-[1.5px] border-[#3a5e45] text-[#90b898] text-[13px] py-2.5 px-4 rounded-lg cursor-pointer mt-4 transition-all duration-200 hover:border-[#27DE6B] hover:text-white"
        >
          ← Volver a hacer el diagnóstico
        </button>
      </div>
    )
  }

  return (
    <div className="p-6 pt-7">
      <div className="inline-flex items-center px-3.5 py-1.5 rounded-md text-xs font-bold tracking-[0.06em] uppercase mb-5 bg-[#1a0a06] border border-[#6b2a14] text-[#f08060]">
        Tu empresa es rentable pero no escalable aún
      </div>
      <h2 className="text-xl font-black leading-tight text-white mb-4">
        El negocio va bien,
        <br />
        pero el techo está <span className="text-[#27DE6B]">más cerca de lo que parece.</span>
      </h2>
      <ScoreDots answers={answers} />
      <p className="text-sm text-[#c0d8c8] leading-relaxed mb-6">
        Tus respuestas muestran que el crecimiento actual depende de tu presencia, no de un sistema.
        Eso no es un fracaso — es exactamente el punto de inflexión donde las empresas deciden si
        quieren seguir siendo rentables o empezar a ser escalables.
      </p>
      <div className="h-px bg-[#1a3020] my-6" />
      <div className="text-[11px] font-bold tracking-widest uppercase text-[#27DE6B] mb-4">
        Las 3 condiciones que faltan construir
      </div>
      <div className="flex gap-3 mb-4 items-start">
        <div className="min-w-6 h-6 bg-[#09140E] border-[1.5px] border-[#27DE6B] text-[#27DE6B] text-xs font-bold rounded-full flex items-center justify-center shrink-0">
          1
        </div>
        <p className="text-sm text-[#d0e8d8] leading-relaxed">
          <strong className="text-white">Sistema de captación activa y medible.</strong> Pasar de
          depender de referidos a un embudo con datos: cuántos leads entran, de dónde y dónde se
          pierden.
        </p>
      </div>
      <div className="flex gap-3 mb-4 items-start">
        <div className="min-w-6 h-6 bg-[#09140E] border-[1.5px] border-[#27DE6B] text-[#27DE6B] text-xs font-bold rounded-full flex items-center justify-center shrink-0">
          2
        </div>
        <p className="text-sm text-[#d0e8d8] leading-relaxed">
          <strong className="text-white">Proceso comercial estandarizado.</strong> Que tu equipo
          pueda responder, cotizar y hacer seguimiento con el mismo criterio — sin necesitarte para
          cada decisión.
        </p>
      </div>
      <div className="flex gap-3 mb-4 items-start">
        <div className="min-w-6 h-6 bg-[#09140E] border-[1.5px] border-[#27DE6B] text-[#27DE6B] text-xs font-bold rounded-full flex items-center justify-center shrink-0">
          3
        </div>
        <p className="text-sm text-[#d0e8d8] leading-relaxed">
          <strong className="text-white">CRM que te dé visibilidad real.</strong> No para controlar
          a tu equipo — sino para saber qué está pasando y poder optimizar sin adivinar.
        </p>
      </div>
      <div className="bg-[#09140E] border border-[#1a3020] border-l-[3px] border-l-[#27DE6B] p-5 rounded-lg mt-6">
        <div className="text-[11px] font-bold tracking-widest uppercase text-[#27DE6B] mb-2">
          Siguiente movimiento
        </div>
        <p className="text-sm text-[#c0d8c8] leading-relaxed mb-4">
          Este es exactamente el perfil con el que trabajamos. Si querés entender qué falta
          construir primero en tu caso específico, hacemos un diagnóstico gratuito de 30 minutos
          para mapearlo.
        </p>
        <button
          onClick={() =>
            handleCTA(
              "Quiero hacer el diagnóstico gratuito de 30 minutos para empezar a escalar mi empresa"
            )
          }
          className="block w-full bg-[#27DE6B] text-[#010707] font-bold text-[15px] py-4 rounded-lg cursor-pointer transition-opacity duration-200 hover:opacity-85"
        >
          Quiero el diagnóstico gratuito ↗
        </button>
      </div>
      <button
        onClick={onRestart}
        className="inline-block bg-transparent border-[1.5px] border-[#3a5e45] text-[#90b898] text-[13px] py-2.5 px-4 rounded-lg cursor-pointer mt-4 transition-all duration-200 hover:border-[#27DE6B] hover:text-white"
      >
        ← Volver a hacer el diagnóstico
      </button>
    </div>
  )
}

export default function DiagnosticoEscalabilidad() {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [answers, setAnswers] = useState<Answers>({})
  const [showResult, setShowResult] = useState(false)

  const handleSelectAnswer = (value: AnswerValue) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: value }))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(1)
    setAnswers({})
    setShowResult(false)
  }

 return (
  <div className="bg-[#010707] text-white font-sans min-h-screen pb-8">
    <div className="max-w-7xl mx-auto w-full">
      
      {/* Header */}
      <header className="p-6 pt-8 pb-6 border-b border-[#2a3f30]">
        <div className="inline-block bg-[#09140E] border border-[#27DE6B] text-[#27DE6B] text-[11px] font-semibold tracking-[0.08em] uppercase py-1 px-2.5 rounded mb-4">
          Diagnóstico de escalabilidad
        </div>
        <h1 className="text-[22px] lg:text-3xl uppercase font-black leading-tight text-white mb-2">
          Las <span className="text-[#27DE6B]">3 condiciones </span>
     
          de escalabilidad
        </h1>
        <p className="text-[13px] text-[#b0c8b8] leading-relaxed">
          Mini-evaluación para saber si tu empresa
          puede crecer — o solo generar más trabajo.
        </p>
      </header>

      {/* Progress Bar */}
      <ProgressBar currentQuestion={currentQuestion} total={questions.length} completed={showResult} />

      {/* Content */}
      {showResult ? (
        <ResultScreen answers={answers} onRestart={handleRestart} />
      ) : (
        <QuestionScreen
          question={questions[currentQuestion - 1]}
          selectedAnswer={answers[currentQuestion]}
          onSelectAnswer={handleSelectAnswer}
          onNext={handleNext}
          isLast={currentQuestion === questions.length}
        />
      )}

    </div>
  </div>
)
}

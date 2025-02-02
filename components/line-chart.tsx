"use client"

import { Line, LineChart as RechartsLineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useTheme } from 'next-themes'

const data = [
  { year: "2022", BusinessSolution: 30, Industry: 25 },
  { year: "2023", BusinessSolution: 50, Industry: 40 },
  { year: "2024", BusinessSolution: 75, Industry: 60 },
  { year: "2025", BusinessSolution: 100, Industry: 85 },
]

export function LineChart() {
  const theme = useTheme()
  const isDark = theme.resolvedTheme === 'dark'

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data}>
        <XAxis 
          dataKey="year" 
          stroke={isDark ? "#888888" : "#333333"} 
          fontSize={12} 
          tickLine={false} 
          axisLine={false} 
        />
        <YAxis
          stroke={isDark ? "#888888" : "#333333"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: isDark ? 'hsl(var(--background))' : 'hsl(var(--card))',
            borderColor: 'hsl(var(--border))',
            color: isDark ? 'hsl(var(--foreground))' : 'hsl(var(--card-foreground))'
          }} 
        />
        <Line type="monotone" dataKey="BusinessSolution" stroke="hsl(var(--primary))" strokeWidth={2} />
        <Line type="monotone" dataKey="Industry" stroke={isDark ? "#888888" : "#333333"} strokeWidth={2} strokeDasharray="5 5" />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}

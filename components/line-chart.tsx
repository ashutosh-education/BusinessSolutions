"use client"

import { Line, LineChart as RechartsLineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useTheme } from 'next-themes'

const data = [
  { date: "Nov 1", Alqen: 50, Others: 48 },
  { date: "Nov 7", Alqen: 45, Others: 42 },
  { date: "Nov 14", Alqen: 47, Others: 55 },
  { date: "Nov 21", Alqen: 48, Others: 52 },
  { date: "Nov 30", Alqen: 65, Others: 48 },
]

export function LineChart() {
  const theme = useTheme()
  const isDark = theme.resolvedTheme === 'dark'

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data}>
        <XAxis 
          dataKey="date" 
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
        <Line type="monotone" dataKey="Alqen" stroke="hsl(var(--primary))" strokeWidth={2} />
        <Line type="monotone" dataKey="Others" stroke={isDark ? "#888888" : "#333333"} strokeWidth={2} strokeDasharray="5 5" />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}


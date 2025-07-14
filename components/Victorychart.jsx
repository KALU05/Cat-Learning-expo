import { View , StyleSheet } from "react-native"
import { Bar, CartesianChart } from "victory-native"
import { LinearGradient, useFont, vec } from "@shopify/react-native-skia"
import inter from "../fonts/BebasNeue-Regular.ttf"

export default function PaintDemo() {
  const font = useFont(inter, 12)
  const data = Array.from({ length: 6 }, (_, index) => ({
    month: index + 1,
    listenCount: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
  }))
  const styles = StyleSheet.create({
    Demo: {
      backgroundColor: "#F2DBE1",
      justifyContent: "center",
      height: "30%",
      width: "90%",
      borderRadius: 20,
      padding: 20,
      margin: 20,
    },
  })

  return (
    <View style={styles.Demo}>
    <CartesianChart
      data={data}
      xKey="month"
      yKeys={["listenCount"]}
      domainPadding={{ left: 20, right: 20, top: 20 }}
      axisOptions={{
        font,
        formatXLabel(value) {
          const date = new Date(2023, value - 1)
          return date.toLocaleString("default", { month: "short" })
        },
      }}
    >
      {({ points, chartBounds }) => (
        <Bar
          chartBounds={chartBounds}
          points={points.listenCount}
          roundedCorners={{
            topLeft: 5,
            topRight: 5,
          }}
        >
          <LinearGradient
            start={vec(0, 0)}
            end={vec(0, 400)}
            colors={["#f890ac", "#f2dce27a"]}
          />
        </Bar>
      )}
    </CartesianChart>
    </View>
  )
}

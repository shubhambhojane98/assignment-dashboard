"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Crown } from "lucide-react";
import { useState } from "react";

const TimePeriod = () => {
  const [activeFilter, setActiveFilter] = useState("1 Month");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className=" py-4">
        <CardHeader className="flex justify-between text-gray-500">
          <CardTitle>Time Period</CardTitle>
          <CardTitle className="text-sm">dd:mm:yyyy - dd:mm:yyyy</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2 flex-wrap">
          {["1 Month", "2 Month", "3 Month"].map((period) => (
            <Button
              key={period}
              variant="outline"
              className={`rounded-full flex items-center gap-1
          ${
            activeFilter === period
              ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 border-purple-400"
              : "text-gray-500 border-gray-300 hover:border-purple-300 hover:text-purple-400"
          }
        `}
              onClick={() => setActiveFilter(period)}
            >
              {period === "3 Month" && (
                <Crown
                  className={`w-4 h-4 ${
                    activeFilter === period && "text-purple-500"
                  }`}
                />
              )}
              {period}
            </Button>
          ))}

          {/* Custom calendar chip */}
          <Button
            variant="outline"
            className={`rounded-full flex items-center gap-1
        ${
          activeFilter === "Custom"
            ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 border-purple-400"
            : "text-gray-500 border-gray-300 hover:border-purple-300 hover:text-purple-400"
        }
      `}
            onClick={() => setActiveFilter("Custom")}
          >
            <Calendar
              className={`w-4 h-4 ${
                activeFilter === "Custom" && "text-purple-500"
              }`}
            />
            Custom
          </Button>
        </CardContent>
      </Card>
      {/* Total Earnings */}
      <Card className="p-4">
        <CardTitle className="text-gray-500">Total Earnings</CardTitle>
        <p className="text-2xl font-bold text-purple-500">$1,25,000</p>
      </Card>
    </div>
  );
};

export default TimePeriod;

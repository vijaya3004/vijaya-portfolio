"use client";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function MusicToggle() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ osc: OscillatorNode[]; gain: GainNode } | null>(null);

  useEffect(() => {
    if (!on) {
      nodesRef.current?.osc.forEach((o) => o.stop());
      ctxRef.current?.close();
      ctxRef.current = null;
      nodesRef.current = null;
      return;
    }
    const AC = window.AudioContext || (window as any).webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    const gain = ctx.createGain();
    gain.gain.value = 0.06;
    gain.connect(ctx.destination);
    const freqs = [110, 164.81, 220, 293.66];
    const osc = freqs.map((f, i) => {
      const o = ctx.createOscillator();
      o.type = i === 0 ? "sine" : "triangle";
      o.frequency.value = f;
      const g = ctx.createGain();
      g.gain.value = 0.25;
      o.connect(g).connect(gain);
      o.start();
      // slow detune sweep
      o.detune.setValueAtTime(0, ctx.currentTime);
      o.detune.linearRampToValueAtTime(20, ctx.currentTime + 8);
      return o;
    });
    ctxRef.current = ctx;
    nodesRef.current = { osc, gain };
  }, [on]);

  
}

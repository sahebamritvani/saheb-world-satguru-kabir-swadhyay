import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { useAppTheme } from '../theme/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface TreeNodeData {
  name: { hi: string; pb: string; en: string };
  children?: TreeNodeData[];
}

export const D3UniverseVisualizer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const d3Container = useRef<SVGSVGElement | null>(null);
  const { theme } = useAppTheme();
  const { language } = useLanguage();
  const [dimensions, setDimensions] = useState({ width: 800, height: 650 });

  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        const targetWidth = Math.max(320, Math.min(width, 1100));
        // Generous vertical height to ensure all 21 Brahmands have ample room without overlapping
        const targetHeight = Math.max(650, targetWidth * 0.95);
        setDimensions({ width: targetWidth, height: targetHeight });
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    resizeObserver.observe(containerRef.current);
    updateDimensions();

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!d3Container.current) return;

    const { width, height } = dimensions;

    const data: TreeNodeData = {
      name: { 
        hi: "अनामी पुरुष (सर्वोच्च अनादि परमात्मा)", 
        pb: "ਅਨਾਮੀ ਪੁਰਸ਼ (ਸਰਵਉੱਚ ਅਨਾਦਿ ਪਰਮਾਤਮਾ)", 
        en: "Anami Purush (Supreme Unmanifest Source)" 
      },
      children: [
        {
          name: { hi: "अमर-लोक (शाश्वत धाम)", pb: "ਅਮਰ-ਲੋਕ (ਸ਼ਾਸ਼ਵਤ ਧਾਮ)", en: "Amar-Lok (Eternal Realm)" },
          children: [
            { name: { hi: "अनामी लोक (सर्वोच्च शिखर)", pb: "ਅਨਾਮੀ ਲੋਕ (ਸਰਵਉੱਚ ਸ਼ਿਖਰ)", en: "Anami Lok (Highest Summit)" } },
            { name: { hi: "अगम लोक", pb: "ਅਗਮ ਲੋਕ", en: "Agam Loka" } },
            { name: { hi: "अलख लोक", pb: "ਅਲਖ ਲੋਕ", en: "Alakh Loka" } },
            { name: { hi: "सत्यलोक (सतपुरुष धाम)", pb: "ਸਤਯਲੋਕ (ਸਤਿਪੁਰੁਸ਼ ਧਾਮ)", en: "Satyaloka" } }
          ]
        },
        {
          name: { hi: "मध्य लोक व महाशून्य", pb: "ਮੱਧ ਲੋਕ ਤੇ ਮਹਾਸੁੰਨ", en: "Intermediate & Void" },
          children: [
            { name: { hi: "भंवर गुफा (सोहं)", pb: "ਭੰਵਰ ਗੁਫ਼ਾ (ਸੋਹੰ)", en: "Bhanwar Gupha" } },
            { name: { hi: "महा-सुन्न (१६ शंख)", pb: "ਮਹਾਂ-ਸੁੰਨ", en: "Maha Sunna" } },
            { name: { hi: "त्रिकुटी (ओंकार)", pb: "ਤ੍ਰਿਕੁਟੀ", en: "Trikuti" } }
          ]
        },
        {
          name: { hi: "काल-लोक (नश्वर)", pb: "ਕਾਲ-ਲੋਕ (ਨਾਸ਼ਵਾਨ)", en: "Kaal-Lok (Material)" },
          children: [
            {
              name: { hi: "२१ ब्रह्मांड", pb: "੨੧ ਬ੍ਰਹਿਮੰਡ", en: "21 Brahmands" },
              children: Array.from({ length: 21 }, (_, i) => {
                const bNum = i + 1;
                let suffix = '';
                if (bNum <= 7) suffix = language === 'pb' ? ' (ਪਾਤਾਲ)' : language === 'en' ? ' (Nether)' : ' (पाताल)';
                else if (bNum <= 14) suffix = language === 'pb' ? ' (ਮੱਧਲੋਕ)' : language === 'en' ? ' (Mortal)' : ' (मध्यलोक)';
                else suffix = language === 'pb' ? ' (ਸਵਰਗ)' : language === 'en' ? ' (Astral)' : ' (स्वर्ग)';

                return { 
                  name: { 
                    hi: `ब्रह्मांड ${bNum}${suffix}`, 
                    pb: `ਬ੍ਰਹਿਮੰਡ ${bNum}${suffix}`, 
                    en: `Universe ${bNum}${suffix}` 
                  } 
                };
              })
            }
          ]
        }
      ]
    };

    const svg = d3.select(d3Container.current);
    svg.selectAll("*").remove();

    // Create a hierarchy and tree layout
    const root = d3.hierarchy<TreeNodeData>(data);
    
    // Responsive margins for mobile
    const isSmall = width < 480;
    const horizontalMargin = isSmall ? 85 : 170;
    const treeLayout = d3.tree<TreeNodeData>().size([height - 60, width - horizontalMargin]);
    treeLayout(root);

    const g = svg.append("g").attr("transform", `translate(${isSmall ? 40 : width * 0.12}, 30)`);

    // Add links with sacred gradient coloring
    g.selectAll(".link")
      .data(root.links())
      .enter().append("path")
      .attr("class", "link")
      .attr("d", d3.linkHorizontal<d3.HierarchyLink<TreeNodeData>, d3.HierarchyPointNode<TreeNodeData>>()
        .x(d => d.y)
        .y(d => d.x))
      .attr("fill", "none")
      .attr("stroke", (d: any) => {
        const n = d.target.data.name.en;
        if (n.includes('Anami')) return "#b91c1c";
        return n.includes('Brahmand') || n.includes('Kaal') || n.includes('Universe') ? "#ea580c" : theme.accentGold;
      })
      .attr("stroke-opacity", 0.65)
      .attr("stroke-width", d => Math.max(1, 3 - d.source.depth))
      .attr("stroke-dasharray", (d: any) => {
        const n = d.target.data.name.en;
        return n.includes('Brahmand') || n.includes('Universe') ? "3,3" : "none";
      });

    // Add nodes
    const node = g.selectAll(".node")
      .data(root.descendants())
      .enter().append("g")
      .attr("transform", (d: any) => `translate(${d.y},${d.x})`);

    // Sacred pulsing effect for root and Anami-Lok
    node.filter((d: any) => d.depth < 2)
        .append("circle")
        .attr("r", (d: any) => d.depth === 0 ? 11 : 7)
        .attr("fill", (d: any) => {
          const n = d.data.name.en;
          if (d.depth === 0 || n.includes('Anami')) return "#b91c1c";
          return n.includes('Kaal') ? "#dc2626" : theme.accentGold;
        })
        .attr("opacity", 0.25)
        .append("animate")
        .attr("attributeName", "r")
        .attr("values", (d: any) => d.depth === 0 ? "9;15;9" : "5;10;5")
        .attr("dur", "3s")
        .attr("repeatCount", "indefinite");

    node.append("circle")
      .attr("r", (d: any) => {
          if (d.depth === 0) return 7.5;
          if (d.depth === 1) return 5.5;
          if (d.depth === 2) return 4;
          return 3;
      })
      .attr("fill", (d: any) => {
        const n = d.data.name.en;
        if (d.depth === 0 || n.includes('Anami')) return '#b91c1c';
        if (n.includes('Amar') || n.includes('Loka') || n.includes('Satya')) return '#f59e0b';
        if (n.includes('Kaal') || n.includes('Brahmand') || n.includes('Universe')) return "#dc2626";
        return "#8b5cf6";
      })
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 1.2)
      .attr("filter", (d: any) => d.depth < 2 ? "drop-shadow(0 0 5px rgba(245,158,11,0.6))" : "none");

    // Add node labels
    node.append("text")
      .attr("dy", ".32em")
      .attr("x", (d: any) => d.children ? -8 : 8)
      .attr("text-anchor", (d: any) => d.children ? "end" : "start")
      .text((d: any) => d.data.name[language] || d.data.name.hi)
      .style("fill", (d: any) => {
        const n = d.data.name.en;
        if (d.depth === 0 || n.includes('Anami')) return '#b91c1c';
        if (n.includes('Kaal') || n.includes('Brahmand')) return '#ea580c';
        return '#78350f';
      })
      .style("font-size", (d: any) => {
        if (d.depth === 0) return isSmall ? "10px" : "12px";
        if (d.depth === 1) return isSmall ? "9px" : "10.5px";
        return isSmall ? "8px" : "9.5px";
      })
      .style("font-weight", (d: any) => d.depth < 2 ? "bold" : "normal")
      .style("font-family", "serif");

  }, [dimensions, language, theme]);

  return (
    <div ref={containerRef} className="w-full overflow-x-auto flex justify-center py-2">
      <svg 
        ref={d3Container} 
        width={dimensions.width} 
        height={dimensions.height}
        className="max-w-full"
      />
    </div>
  );
};

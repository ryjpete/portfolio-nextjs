'use client';

import { useEffect } from 'react';
import styles from './glitch-effect.module.css';

export default function GlitchEffect() {
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      // Get all text nodes in the viewport
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null
      );

      const textNodes: Text[] = [];
      let node: Node | null;

      while ((node = walker.nextNode())) {
        const parent = node.parentElement;
        if (
          parent &&
          node.textContent &&
          node.textContent.trim().length > 0 &&
          !parent.closest('script') &&
          !parent.closest('style') &&
          !parent.closest('noscript')
        ) {
          // Check if element is in viewport
          const rect = parent.getBoundingClientRect();
          if (
            rect.top < window.innerHeight &&
            rect.bottom > 0 &&
            rect.left < window.innerWidth &&
            rect.right > 0
          ) {
            textNodes.push(node as Text);
          }
        }
      }

      if (textNodes.length === 0) return;

      // Only glitch 1 letter at a time
      const randomNode = textNodes[Math.floor(Math.random() * textNodes.length)];
      const text = randomNode.textContent || '';
      
      if (text.length === 0) return;

      // Pick a random letter
      const randomIndex = Math.floor(Math.random() * text.length);
      const letter = text[randomIndex];

      // Skip if it's whitespace
      if (letter.trim() === '') return;

      // Create span wrapper
      const span = document.createElement('span');
      span.className = styles.glitch;
      span.textContent = letter;

      // Split text and insert span
      const beforeText = text.substring(0, randomIndex);
      const afterText = text.substring(randomIndex + 1);

      const parent = randomNode.parentNode;
      if (parent) {
        const fragment = document.createDocumentFragment();
        fragment.appendChild(document.createTextNode(beforeText));
        fragment.appendChild(span);
        fragment.appendChild(document.createTextNode(afterText));

        parent.replaceChild(fragment, randomNode);

        // Remove glitch after animation
        setTimeout(() => {
          if (span.parentNode) {
            const originalText = beforeText + letter + afterText;
            const textNode = document.createTextNode(originalText);
            
            // Get references to siblings before replacing
            const prevSibling = span.previousSibling;
            const nextSibling = span.nextSibling;
            
            // Replace span with original text
            span.parentNode.replaceChild(textNode, span);
            
            // Remove the split text nodes
            if (prevSibling && prevSibling.nodeType === Node.TEXT_NODE) {
              prevSibling.remove();
            }
            if (nextSibling && nextSibling.nodeType === Node.TEXT_NODE) {
              nextSibling.remove();
            }
          }
        }, 1500);
      }
    }, 2000); // Trigger every 2 seconds

    return () => clearInterval(glitchInterval);
  }, []);

  return null;
}
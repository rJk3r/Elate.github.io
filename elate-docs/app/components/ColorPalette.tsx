'use client';
import { useState } from 'react';
import { Copy, Check, Palette } from 'lucide-react';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface Color {
  hex: string;
  name: string;
  category: 'original' | 'new';
  family: string;
}

export function ColorPalette() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors: Color[] = [
    // Исходные цвета
    { hex: 'B0796C', name: 'Terracotta Blush', category: 'original', family: 'warm' },
    { hex: 'A08B95', name: 'Dusty Mauve', category: 'original', family: 'neutral' },
    { hex: 'DCA98E', name: 'Peachy Sunset', category: 'original', family: 'warm' },
    { hex: '73A0D8', name: 'Serene Sky', category: 'original', family: 'blue' },
    { hex: '88A8A0', name: 'Sage Mist', category: 'original', family: 'green' },
    { hex: 'CE6EBB', name: 'Orchid Dream', category: 'original', family: 'purple' },
    { hex: 'AA5CCC', name: 'Violet Charm', category: 'original', family: 'purple' },
    { hex: '7B6480', name: 'Twilight Plum', category: 'original', family: 'purple' },
    { hex: '4B3E51', name: 'Midnight Aubergine', category: 'original', family: 'dark' },
    
    // Новые цвета - Красные оттенки
    { hex: 'D97B6F', name: 'Coral Embrace', category: 'new', family: 'red' },
    { hex: 'C85C5C', name: 'Rustic Crimson', category: 'new', family: 'red' },
    { hex: 'B54E6B', name: 'Berry Passion', category: 'new', family: 'red' },
    
    // Жёлтые и оранжевые
    { hex: 'E8B86D', name: 'Golden Harvest', category: 'new', family: 'yellow' },
    { hex: 'D9A25F', name: 'Amber Glow', category: 'new', family: 'yellow' },
    { hex: 'C88A5E', name: 'Caramel Delight', category: 'new', family: 'orange' },
    
    // Зелёные оттенки
    { hex: '6B9D7C', name: 'Forest Whisper', category: 'new', family: 'green' },
    { hex: '5D8F7A', name: 'Eucalyptus Grove', category: 'new', family: 'green' },
    { hex: '9BC29A', name: 'Spring Meadow', category: 'new', family: 'green' },
    
    // Синие оттенки
    { hex: '5A87C8', name: 'Azure Depth', category: 'new', family: 'blue' },
    { hex: '6D99CC', name: 'Periwinkle Dreams', category: 'new', family: 'blue' },
    { hex: '4F7AA8', name: 'Denim Blues', category: 'new', family: 'blue' },
    
    // Бирюзовые/голубые
    { hex: '76B7B4', name: 'Aqua Serenity', category: 'new', family: 'cyan' },
    { hex: '5FA3A0', name: 'Teal Cascade', category: 'new', family: 'cyan' },
    
    // Нейтральные и тёплые серые
    { hex: '8E7E8A', name: 'Heather Grey', category: 'new', family: 'neutral' },
    { hex: 'B09EA6', name: 'Rose Fog', category: 'new', family: 'neutral' },
    { hex: '6E5D68', name: 'Smoky Taupe', category: 'new', family: 'neutral' },
    
    // Тёмно-серые оттенки
    { hex: '3A3A3A', name: 'Dark Gray', category: 'new', family: 'darkGray' },
    { hex: '2C2C2C', name: 'Very Dark Gray', category: 'new', family: 'darkGray' },
    { hex: '1E1E1E', name: 'Ultra Dark Gray', category: 'new', family: 'darkGray' },
    
    // Тёмные версии цветов
    { hex: '8A3B7C', name: 'Dark Violet Charm', category: 'new', family: 'darkPurple' },
    { hex: '3F5B89', name: 'Dark Azure Depth', category: 'new', family: 'darkBlue' },
    { hex: '4D6661', name: 'Dark Eucalyptus Grove', category: 'new', family: 'darkGreen' },
    { hex: '6B2E83', name: 'Dark Forest Whisper', category: 'new', family: 'darkGreen' },
    { hex: 'B09EA6', name: 'Dark Rose Fog', category: 'new', family: 'darkNeutral' },
  ];

  const materialUISchemes = [
    {
      name: 'Primary Scheme',
      description: 'Основная цветовая схема',
      colors: [
        { role: 'primary', hex: 'AA5CCC', name: 'Violet Charm' },
        { role: 'on-primary', hex: 'FFFFFF', name: 'White' },
        { role: 'primary-container', hex: 'CE6EBB', name: 'Orchid Dream' },
        { role: 'on-primary-container', hex: '4B3E51', name: 'Midnight Aubergine' },
      ]
    },
    {
      name: 'Secondary Scheme',
      description: 'Вторичная цветовая схема',
      colors: [
        { role: 'secondary', hex: '73A0D8', name: 'Serene Sky' },
        { role: 'on-secondary', hex: 'FFFFFF', name: 'White' },
        { role: 'secondary-container', hex: '6D99CC', name: 'Periwinkle Dreams' },
        { role: 'on-secondary-container', hex: '4B3E51', name: 'Midnight Aubergine' },
      ]
    },
    {
      name: 'Tertiary Scheme',
      description: 'Третичная цветовая схема',
      colors: [
        { role: 'tertiary', hex: '88A8A0', name: 'Sage Mist' },
        { role: 'on-tertiary', hex: 'FFFFFF', name: 'White' },
        { role: 'tertiary-container', hex: '9BC29A', name: 'Spring Meadow' },
        { role: 'on-tertiary-container', hex: '4B3E51', name: 'Midnight Aubergine' },
      ]
    },
    {
      name: 'Error Scheme',
      description: 'Схема для ошибок',
      colors: [
        { role: 'error', hex: 'C85C5C', name: 'Rustic Crimson' },
        { role: 'on-error', hex: 'FFFFFF', name: 'White' },
        { role: 'error-container', hex: 'D97B6F', name: 'Coral Embrace' },
        { role: 'on-error-container', hex: '4B3E51', name: 'Midnight Aubergine' },
      ]
    },
    {
      name: 'Surface Scheme',
      description: 'Схема для поверхностей',
      colors: [
        { role: 'surface', hex: 'F5F5F5', name: 'Light Surface' },
        { role: 'on-surface', hex: '4B3E51', name: 'Midnight Aubergine' },
        { role: 'surface-variant', hex: 'B09EA6', name: 'Rose Fog' },
        { role: 'on-surface-variant', hex: '6E5D68', name: 'Smoky Taupe' },
      ]
    },
  ];

  const copyToClipboard = (hex: string) => {
    try {
      // Fallback method for environments where Clipboard API is blocked
      const textArea = document.createElement('textarea');
      textArea.value = `#${hex}`;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        setCopiedColor(hex);
        setTimeout(() => setCopiedColor(null), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
      
      document.body.removeChild(textArea);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const getContrastColor = (hex: string) => {
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
  };

  const familyGroups = {
    red: colors.filter(c => c.family === 'red'),
    orange: colors.filter(c => c.family === 'orange'),
    yellow: colors.filter(c => c.family === 'yellow'),
    green: colors.filter(c => c.family === 'green'),
    cyan: colors.filter(c => c.family === 'cyan'),
    blue: colors.filter(c => c.family === 'blue'),
    purple: colors.filter(c => c.family === 'purple'),
    warm: colors.filter(c => c.family === 'warm'),
    neutral: colors.filter(c => c.family === 'neutral'),
    dark: colors.filter(c => c.family === 'dark'),
    darkGray: colors.filter(c => c.family === 'darkGray'),
    darkRed: colors.filter(c => c.family === 'darkRed'),
    darkYellow: colors.filter(c => c.family === 'darkYellow'),
    darkGreen: colors.filter(c => c.family === 'darkGreen'),
    darkCyan: colors.filter(c => c.family === 'darkCyan'),
    darkBlue: colors.filter(c => c.family === 'darkBlue'),
    darkPurple: colors.filter(c => c.family === 'darkPurple'),
    darkWarm: colors.filter(c => c.family === 'darkWarm'),
    darkNeutral: colors.filter(c => c.family === 'darkNeutral'),
  };

  // Полные темы для дизайна продуктов
  const productThemes = [
    // Тёмные темы
    {
      id: 'dark-red',
      name: 'Crimson Night',
      type: 'dark',
      accent: 'red',
      description: 'Тёмная тема с красным акцентом для энергичных и страстных продуктов',
      colors: {
        background: '1E1E1E',
        surface: '2C2C2C',
        surfaceVariant: '3A3A3A',
        primary: 'C85C5C',
        primaryHover: 'D97B6F',
        secondary: 'B54E6B',
        text: 'FFFFFF',
        textSecondary: 'B09EA6',
        border: '454545',
        success: '6B9D7C',
        warning: 'E8B86D',
        error: 'C85C5C',
      }
    },
    {
      id: 'dark-purple',
      name: 'Violet Eclipse',
      type: 'dark',
      accent: 'purple',
      description: 'Тёмная тема с фиолетовым акцентом для креативных и инновационных продуктов',
      colors: {
        background: '1E1E1E',
        surface: '2C2C2C',
        surfaceVariant: '3A3A3A',
        primary: 'AA5CCC',
        primaryHover: 'CE6EBB',
        secondary: '8A3B7C',
        text: 'FFFFFF',
        textSecondary: 'B09EA6',
        border: '454545',
        success: '6B9D7C',
        warning: 'E8B86D',
        error: 'C85C5C',
      }
    },
    {
      id: 'dark-lime',
      name: 'Neon Forest',
      type: 'dark',
      accent: 'lime',
      description: 'Тёмная тема с лаймовым акцентом для современных и свежих продуктов',
      colors: {
        background: '1E1E1E',
        surface: '2C2C2C',
        surfaceVariant: '3A3A3A',
        primary: '9BC29A',
        primaryHover: '88A8A0',
        secondary: '6B9D7C',
        text: 'FFFFFF',
        textSecondary: 'B09EA6',
        border: '454545',
        success: '9BC29A',
        warning: 'E8B86D',
        error: 'C85C5C',
      }
    },
    {
      id: 'dark-blue',
      name: 'Ocean Depths',
      type: 'dark',
      accent: 'blue',
      description: 'Тёмная тема с синим акцентом для профессиональных и надёжных продуктов',
      colors: {
        background: '1E1E1E',
        surface: '2C2C2C',
        surfaceVariant: '3A3A3A',
        primary: '73A0D8',
        primaryHover: '6D99CC',
        secondary: '5A87C8',
        text: 'FFFFFF',
        textSecondary: 'B09EA6',
        border: '454545',
        success: '6B9D7C',
        warning: 'E8B86D',
        error: 'C85C5C',
      }
    },
    // Светлые темы
    {
      id: 'light-red',
      name: 'Coral Sunrise',
      type: 'light',
      accent: 'red',
      description: 'Светлая тема с красным акцентом для дружелюбных и активных продуктов',
      colors: {
        background: 'FFFFFF',
        surface: 'F5F5F5',
        surfaceVariant: 'E8E8E8',
        primary: 'C85C5C',
        primaryHover: 'D97B6F',
        secondary: 'B54E6B',
        text: '1E1E1E',
        textSecondary: '6E5D68',
        border: 'D0D0D0',
        success: '6B9D7C',
        warning: 'D9A25F',
        error: 'C85C5C',
      }
    },
    {
      id: 'light-purple',
      name: 'Lavender Dream',
      type: 'light',
      accent: 'purple',
      description: 'Светлая тема с фиолетовым акцентом для элегантных и творческих продуктов',
      colors: {
        background: 'FFFFFF',
        surface: 'F5F5F5',
        surfaceVariant: 'E8E8E8',
        primary: 'AA5CCC',
        primaryHover: 'CE6EBB',
        secondary: '7B6480',
        text: '1E1E1E',
        textSecondary: '6E5D68',
        border: 'D0D0D0',
        success: '6B9D7C',
        warning: 'D9A25F',
        error: 'C85C5C',
      }
    },
    {
      id: 'light-lime',
      name: 'Spring Garden',
      type: 'light',
      accent: 'lime',
      description: 'Светлая тема с лаймовым акцентом для экологичных и жизнерадостных продуктов',
      colors: {
        background: 'FFFFFF',
        surface: 'F5F5F5',
        surfaceVariant: 'E8E8E8',
        primary: '88A8A0',
        primaryHover: '9BC29A',
        secondary: '6B9D7C',
        text: '1E1E1E',
        textSecondary: '6E5D68',
        border: 'D0D0D0',
        success: '9BC29A',
        warning: 'D9A25F',
        error: 'C85C5C',
      }
    },
    {
      id: 'light-blue',
      name: 'Sky Breeze',
      type: 'light',
      accent: 'blue',
      description: 'Светлая тема с синим акцентом для чистых и доверительных продуктов',
      colors: {
        background: 'FFFFFF',
        surface: 'F5F5F5',
        surfaceVariant: 'E8E8E8',
        primary: '73A0D8',
        primaryHover: '6D99CC',
        secondary: '5A87C8',
        text: '1E1E1E',
        textSecondary: '6E5D68',
        border: 'D0D0D0',
        success: '6B9D7C',
        warning: 'D9A25F',
        error: 'C85C5C',
      }
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Palette className="size-8 text-purple-600" />
          <h1 className="text-4xl">Elate Illustrator's Set</h1>
        </div>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Уникальная цветовая палитра, созданная для креативных проектов. 
          Содержит {colors.length} тщательно подобранных оттенков, охватывающих весь цветовой спектр.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-6 mb-8">
          <TabsTrigger value="all">Вся палитра</TabsTrigger>
          <TabsTrigger value="families">По семействам</TabsTrigger>
          <TabsTrigger value="dark">Тёмные</TabsTrigger>
          <TabsTrigger value="themes">Темы</TabsTrigger>
          <TabsTrigger value="material">Material UI 3</TabsTrigger>
          <TabsTrigger value="examples">Примеры</TabsTrigger>
        </TabsList>

        {/* Вся палитра */}
        <TabsContent value="all" className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-2xl">Исходная палитра</h2>
              <Badge variant="secondary">{colors.filter(c => c.category === 'original').length} цветов</Badge>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {colors.filter(c => c.category === 'original').map((color) => (
                <Card 
                  key={`${color.hex}-${color.name}`}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => copyToClipboard(color.hex)}
                >
                  <div 
                    className="h-32 relative"
                    style={{ backgroundColor: `#${color.hex}` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                      {copiedColor === color.hex ? (
                        <Check className="size-6" style={{ color: getContrastColor(color.hex) }} />
                      ) : (
                        <Copy className="size-6" style={{ color: getContrastColor(color.hex) }} />
                      )}
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-sm mb-1">{color.name}</p>
                    <code className="text-xs text-neutral-500">#{color.hex}</code>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-2xl">Дополнительные цвета</h2>
              <Badge>{colors.filter(c => c.category === 'new').length} цветов</Badge>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {colors.filter(c => c.category === 'new').map((color) => (
                <Card 
                  key={`${color.hex}-${color.name}`}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => copyToClipboard(color.hex)}
                >
                  <div 
                    className="h-32 relative"
                    style={{ backgroundColor: `#${color.hex}` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                      {copiedColor === color.hex ? (
                        <Check className="size-6" style={{ color: getContrastColor(color.hex) }} />
                      ) : (
                        <Copy className="size-6" style={{ color: getContrastColor(color.hex) }} />
                      )}
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-sm mb-1">{color.name}</p>
                    <code className="text-xs text-neutral-500">#{color.hex}</code>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* По семействам */}
        <TabsContent value="families" className="space-y-8">
          {Object.entries(familyGroups).map(([family, familyColors]) => 
            familyColors.length > 0 && (
              <div key={family}>
                <h3 className="text-xl mb-4 capitalize">
                  {family === 'warm' ? 'Тёплые' : 
                   family === 'neutral' ? 'Нейтральные' : 
                   family === 'dark' ? 'Тёмные' : 
                   family === 'red' ? 'Красные' : 
                   family === 'orange' ? 'Оранжевые' : 
                   family === 'yellow' ? 'Жёлтые' : 
                   family === 'green' ? 'Зелёные' : 
                   family === 'cyan' ? 'Бирюзовые' : 
                   family === 'blue' ? 'Синие' : 
                   family === 'purple' ? 'Фиолетовые' : 
                   family === 'darkGray' ? 'Тёмно-серые' :
                   family === 'darkRed' ? 'Тёмно-красные' :
                   family === 'darkYellow' ? 'Тёмно-жёлтые' :
                   family === 'darkGreen' ? 'Тёмно-зелёные' :
                   family === 'darkCyan' ? 'Тёмно-бирюзовые' :
                   family === 'darkBlue' ? 'Тёмно-синие' :
                   family === 'darkPurple' ? 'Тёмно-фиолетовые' :
                   family === 'darkWarm' ? 'Тём��о-тёплые' :
                   family === 'darkNeutral' ? 'Тёмно-нейтральные' :
                   family}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {familyColors.map((color) => (
                    <Card 
                      key={`${color.hex}-${color.name}`}
                      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                      onClick={() => copyToClipboard(color.hex)}
                    >
                      <div 
                        className="h-24 relative"
                        style={{ backgroundColor: `#${color.hex}` }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                          {copiedColor === color.hex ? (
                            <Check className="size-5" style={{ color: getContrastColor(color.hex) }} />
                          ) : (
                            <Copy className="size-5" style={{ color: getContrastColor(color.hex) }} />
                          )}
                        </div>
                      </div>
                      <div className="p-2">
                        <p className="text-xs mb-1">{color.name}</p>
                        <code className="text-xs text-neutral-500">#{color.hex}</code>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )
          )}
        </TabsContent>

        {/* Тёмные версии */}
        <TabsContent value="dark" className="space-y-8">
          <div className="mb-6">
            <h2 className="text-2xl mb-2">Тёмная палитра</h2>
            <p className="text-neutral-600">
              Тёмно-серые оттенки и тёмные версии основных цветов палитры для дизайна в тёмной теме
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-4">Тёмно-серые оттенки</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {colors.filter(c => c.family === 'darkGray').map((color) => (
                <Card 
                  key={`${color.hex}-${color.name}`}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => copyToClipboard(color.hex)}
                >
                  <div 
                    className="h-32 relative"
                    style={{ backgroundColor: `#${color.hex}` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/10">
                      {copiedColor === color.hex ? (
                        <Check className="size-6 text-white" />
                      ) : (
                        <Copy className="size-6 text-white" />
                      )}
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-sm mb-1">{color.name}</p>
                    <code className="text-xs text-neutral-500">#{color.hex}</code>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-4">Тёмные версии цветов</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {colors.filter(c => c.family.startsWith('dark') && c.family !== 'dark' && c.family !== 'darkGray').map((color) => (
                <Card 
                  key={`${color.hex}-${color.name}`}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => copyToClipboard(color.hex)}
                >
                  <div 
                    className="h-32 relative"
                    style={{ backgroundColor: `#${color.hex}` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/10">
                      {copiedColor === color.hex ? (
                        <Check className="size-6 text-white" />
                      ) : (
                        <Copy className="size-6 text-white" />
                      )}
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-sm mb-1">{color.name}</p>
                    <code className="text-xs text-neutral-500">#{color.hex}</code>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Пример тёмной темы */}
          <div>
            <h3 className="text-xl mb-4">Пример интерфейса в тёмной теме</h3>
            <Card className="p-6" style={{ backgroundColor: '#2C2C2C' }}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-white">Панель управления</h4>
                  <Button style={{ backgroundColor: '#8A3B7C', color: 'white' }}>Создать</Button>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4" style={{ backgroundColor: '#3A3A3A' }}>
                    <div className="size-12 rounded-lg mb-3" style={{ backgroundColor: '#3F5B89' }} />
                    <p className="text-white mb-1">Статистика</p>
                    <p className="text-sm" style={{ color: '#B09EA6' }}>1,234 пользователей</p>
                  </Card>
                  <Card className="p-4" style={{ backgroundColor: '#3A3A3A' }}>
                    <div className="size-12 rounded-lg mb-3" style={{ backgroundColor: '#4D6661' }} />
                    <p className="text-white mb-1">Активность</p>
                    <p className="text-sm" style={{ color: '#B09EA6' }}>89% прирост</p>
                  </Card>
                  <Card className="p-4" style={{ backgroundColor: '#3A3A3A' }}>
                    <div className="size-12 rounded-lg mb-3" style={{ backgroundColor: '#6B2E83' }} />
                    <p className="text-white mb-1">Доход</p>
                    <p className="text-sm" style={{ color: '#B09EA6' }}>$45,678</p>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Темы для продуктов */}
        <TabsContent value="themes" className="space-y-8">
          <div className="mb-6">
            <h2 className="text-2xl mb-2">Готовые темы для продуктов</h2>
            <p className="text-neutral-600">
              Полные цветовые схемы для дизайна продуктов: 4 тёмные темы и 4 светлые темы с различными цветовыми акцентами
            </p>
          </div>

          {/* Тёмные темы */}
          <div>
            <h3 className="text-xl mb-4">Тёмные темы</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {productThemes.filter(t => t.type === 'dark').map((theme) => (
                <Card key={theme.id} className="overflow-hidden">
                  <div className="p-6" style={{ backgroundColor: `#${theme.colors.background}` }}>
                    <div className="mb-4">
                      <h4 className="text-white mb-1">{theme.name}</h4>
                      <p className="text-sm" style={{ color: `#${theme.colors.textSecondary}` }}>{theme.description}</p>
                    </div>
                    
                    {/* Цветовая палитра темы */}
                    <div className="grid grid-cols-6 gap-2 mb-4">
                      <div className="space-y-1">
                        <div className="h-12 rounded" style={{ backgroundColor: `#${theme.colors.background}` }} />
                        <p className="text-xs text-white">BG</p>
                      </div>
                      <div className="space-y-1">
                        <div className="h-12 rounded" style={{ backgroundColor: `#${theme.colors.surface}` }} />
                        <p className="text-xs text-white">Surface</p>
                      </div>
                      <div className="space-y-1">
                        <div className="h-12 rounded" style={{ backgroundColor: `#${theme.colors.primary}` }} />
                        <p className="text-xs text-white">Primary</p>
                      </div>
                      <div className="space-y-1">
                        <div className="h-12 rounded" style={{ backgroundColor: `#${theme.colors.secondary}` }} />
                        <p className="text-xs text-white">Second</p>
                      </div>
                      <div className="space-y-1">
                        <div className="h-12 rounded" style={{ backgroundColor: `#${theme.colors.success}` }} />
                        <p className="text-xs text-white">Success</p>
                      </div>
                      <div className="space-y-1">
                        <div className="h-12 rounded" style={{ backgroundColor: `#${theme.colors.error}` }} />
                        <p className="text-xs text-white">Error</p>
                      </div>
                    </div>

                    {/* Пример UI */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Button 
                          style={{ 
                            backgroundColor: `#${theme.colors.primary}`, 
                            color: 'white' 
                          }}
                        >
                          Основная кнопка
                        </Button>
                        <Button 
                          style={{ 
                            backgroundColor: 'transparent', 
                            border: `1px solid #${theme.colors.border}`,
                            color: 'white'
                          }}
                        >
                          Вторичная
                        </Button>
                      </div>
                      
                      <div 
                        className="p-4 rounded-lg"
                        style={{ backgroundColor: `#${theme.colors.surface}` }}
                      >
                        <p className="text-white mb-2">Пример карточки</p>
                        <p className="text-sm" style={{ color: `#${theme.colors.textSecondary}` }}>
                          Текст на поверхности с использованием вторичного цвета текста
                        </p>
                        <div className="flex gap-2 mt-3">
                          <Badge style={{ backgroundColor: `#${theme.colors.success}`, color: 'white' }}>
                            Успех
                          </Badge>
                          <Badge style={{ backgroundColor: `#${theme.colors.warning}`, color: '#1E1E1E' }}>
                            Внимание
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Спецификация цветов */}
                  <div className="p-4 bg-white border-t">
                    <h5 className="text-sm mb-3">Цветовая спецификация</h5>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {Object.entries(theme.colors).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2">
                          <div 
                            className="size-4 rounded border border-neutral-200" 
                            style={{ backgroundColor: `#${value}` }}
                          />
                          <code className="text-neutral-600">#{value}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Светлые темы */}
          <div>
            <h3 className="text-xl mb-4">Светлые темы</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {productThemes.filter(t => t.type === 'light').map((theme) => (
                <Card key={theme.id} className="overflow-hidden">
                  <div className="p-6" style={{ backgroundColor: `#${theme.colors.background}` }}>
                    <div className="mb-4">
                      <h4 style={{ color: `#${theme.colors.text}` }} className="mb-1">{theme.name}</h4>
                      <p className="text-sm" style={{ color: `#${theme.colors.textSecondary}` }}>{theme.description}</p>
                    </div>
                    
                    {/* Цветовая палитра темы */}
                    <div className="grid grid-cols-6 gap-2 mb-4">
                      <div className="space-y-1">
                        <div className="h-12 rounded border" style={{ backgroundColor: `#${theme.colors.background}` }} />
                        <p className="text-xs" style={{ color: `#${theme.colors.text}` }}>BG</p>
                      </div>
                      <div className="space-y-1">
                        <div className="h-12 rounded" style={{ backgroundColor: `#${theme.colors.surface}` }} />
                        <p className="text-xs" style={{ color: `#${theme.colors.text}` }}>Surface</p>
                      </div>
                      <div className="space-y-1">
                        <div className="h-12 rounded" style={{ backgroundColor: `#${theme.colors.primary}` }} />
                        <p className="text-xs" style={{ color: `#${theme.colors.text}` }}>Primary</p>
                      </div>
                      <div className="space-y-1">
                        <div className="h-12 rounded" style={{ backgroundColor: `#${theme.colors.secondary}` }} />
                        <p className="text-xs" style={{ color: `#${theme.colors.text}` }}>Second</p>
                      </div>
                      <div className="space-y-1">
                        <div className="h-12 rounded" style={{ backgroundColor: `#${theme.colors.success}` }} />
                        <p className="text-xs" style={{ color: `#${theme.colors.text}` }}>Success</p>
                      </div>
                      <div className="space-y-1">
                        <div className="h-12 rounded" style={{ backgroundColor: `#${theme.colors.error}` }} />
                        <p className="text-xs" style={{ color: `#${theme.colors.text}` }}>Error</p>
                      </div>
                    </div>

                    {/* Пример UI */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Button 
                          style={{ 
                            backgroundColor: `#${theme.colors.primary}`, 
                            color: 'white' 
                          }}
                        >
                          Основная кнопка
                        </Button>
                        <Button 
                          style={{ 
                            backgroundColor: 'transparent', 
                            border: `1px solid #${theme.colors.border}`,
                            color: `#${theme.colors.text}`
                          }}
                        >
                          Вторичная
                        </Button>
                      </div>
                      
                      <div 
                        className="p-4 rounded-lg"
                        style={{ backgroundColor: `#${theme.colors.surface}` }}
                      >
                        <p style={{ color: `#${theme.colors.text}` }} className="mb-2">Пример карточки</p>
                        <p className="text-sm" style={{ color: `#${theme.colors.textSecondary}` }}>
                          Текст на поверхности с использованием вторичного цвета текста
                        </p>
                        <div className="flex gap-2 mt-3">
                          <Badge style={{ backgroundColor: `#${theme.colors.success}`, color: 'white' }}>
                            Успех
                          </Badge>
                          <Badge style={{ backgroundColor: `#${theme.colors.warning}`, color: '#1E1E1E' }}>
                            Внимание
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Спецификация цветов */}
                  <div className="p-4 bg-neutral-50 border-t">
                    <h5 className="text-sm mb-3">Цветовая спецификация</h5>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {Object.entries(theme.colors).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2">
                          <div 
                            className="size-4 rounded border border-neutral-300" 
                            style={{ backgroundColor: `#${value}` }}
                          />
                          <code className="text-neutral-600">#{value}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Информация о применении */}
          <Card className="p-6 bg-neutral-50">
            <h3 className="text-lg mb-3">Как применить тему в проекте</h3>
            <div className="space-y-3 text-sm text-neutral-700">
              <div>
                <p className="mb-2"><strong>1. CSS Variables</strong></p>
                <code className="block bg-white p-3 rounded text-xs overflow-x-auto">
                  {`:root {
  --bg: #1E1E1E;
  --surface: #2C2C2C;
  --primary: #AA5CCC;
  --text: #FFFFFF;
  /* ... остальные переменные */
}`}
                </code>
              </div>
              <div>
                <p className="mb-2"><strong>2. Tailwind Config</strong></p>
                <code className="block bg-white p-3 rounded text-xs overflow-x-auto">
                  {`colors: {
  background: '#1E1E1E',
  surface: '#2C2C2C',
  primary: '#AA5CCC',
  // ... остальные цвета
}`}
                </code>
              </div>
              <p className="pt-2">
                <strong>Совет:</strong> Каждая тема включает все необходимые цвета для создания полноценного дизайна: 
                фоны, текст, интерактивные элементы, состояния (успех, ошибка, предупреждение).
              </p>
            </div>
          </Card>
        </TabsContent>

        {/* Material UI 3 */}
        <TabsContent value="material" className="space-y-6">
          <div className="mb-6">
            <h2 className="text-2xl mb-2">Material UI 3 Color Schemes</h2>
            <p className="text-neutral-600">
              Примеры построения цветовых схем для дизайн-системы Material Design 3 на основе палитры Elate Illustrator's Set
            </p>
          </div>

          <div className="grid gap-6">
            {materialUISchemes.map((scheme) => (
              <Card key={scheme.name} className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl mb-1">{scheme.name}</h3>
                  <p className="text-sm text-neutral-600">{scheme.description}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {scheme.colors.map((color) => (
                    <div key={color.role} className="space-y-2">
                      <div 
                        className="h-24 rounded-lg flex items-center justify-center relative group cursor-pointer"
                        style={{ backgroundColor: `#${color.hex}` }}
                        onClick={() => copyToClipboard(color.hex)}
                      >
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 rounded-lg">
                          {copiedColor === color.hex ? (
                            <Check className="size-5" style={{ color: getContrastColor(color.hex) }} />
                          ) : (
                            <Copy className="size-5" style={{ color: getContrastColor(color.hex) }} />
                          )}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500">{color.role}</p>
                        <p className="text-sm">{color.name}</p>
                        <code className="text-xs text-neutral-400">#{color.hex}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 bg-neutral-50">
            <h3 className="text-lg mb-3">Как использовать</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>• <strong>Primary</strong> - основной цвет бренда, используется для главных элементов действий</li>
              <li>• <strong>Secondary</strong> - вторичный цвет, дополняет primary и используется для менее важных действий</li>
              <li>• <strong>Tertiary</strong> - третичный цвет, используется для акцентов и разнообразия</li>
              <li>• <strong>Error</strong> - цвет для обозначения ошибок и деструктивных действий</li>
              <li>• <strong>Surface</strong> - цвет фона и поверхностей интерфейса</li>
              <li>• <strong>On-*</strong> - цвет текста/иконок на соответствующем фоне для достижения контраста</li>
              <li>• <strong>*-Container</strong> - более светлая версия цвета для контейнеров</li>
            </ul>
          </Card>
        </TabsContent>

        {/* Примеры использования */}
        <TabsContent value="examples" className="space-y-6">
          <h2 className="text-2xl mb-4">Примеры использования палитры</h2>
          
          {/* Пример карточки продукта */}
          <div>
            <h3 className="text-lg mb-3">Карточка продукта</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="overflow-hidden">
                <div className="h-40" style={{ backgroundColor: '#73A0D8' }} />
                <div className="p-4">
                  <Badge style={{ backgroundColor: '#AA5CCC', color: 'white' }}>Новинка</Badge>
                  <h4 className="mt-2 mb-1">Название продукта</h4>
                  <p className="text-sm text-neutral-600 mb-3">Описание продукта с использованием цветов палитры</p>
                  <Button style={{ backgroundColor: '#CE6EBB', color: 'white' }}>Подробнее</Button>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-40" style={{ backgroundColor: '#88A8A0' }} />
                <div className="p-4">
                  <Badge style={{ backgroundColor: '#E8B86D', color: '#4B3E51' }}>Популярно</Badge>
                  <h4 className="mt-2 mb-1">Название продукта</h4>
                  <p className="text-sm text-neutral-600 mb-3">Описание продукта с использованием цветов палитры</p>
                  <Button style={{ backgroundColor: '#6B9D7C', color: 'white' }}>Подробнее</Button>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-40" style={{ backgroundColor: '#DCA98E' }} />
                <div className="p-4">
                  <Badge style={{ backgroundColor: '#C85C5C', color: 'white' }}>Скидка</Badge>
                  <h4 className="mt-2 mb-1">Название продукта</h4>
                  <p className="text-sm text-neutral-600 mb-3">Описание продукта с использованием цветов палитры</p>
                  <Button style={{ backgroundColor: '#D97B6F', color: 'white' }}>Подробнее</Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Пример кнопок */}
          <div>
            <h3 className="text-lg mb-3">Варианты кнопок</h3>
            <div className="flex flex-wrap gap-3">
              <Button style={{ backgroundColor: '#AA5CCC', color: 'white' }}>Primary Action</Button>
              <Button style={{ backgroundColor: '#73A0D8', color: 'white' }}>Secondary Action</Button>
              <Button style={{ backgroundColor: '#88A8A0', color: 'white' }}>Tertiary Action</Button>
              <Button style={{ backgroundColor: '#C85C5C', color: 'white' }}>Delete</Button>
              <Button style={{ backgroundColor: '#E8B86D', color: '#4B3E51' }}>Warning</Button>
              <Button style={{ backgroundColor: '#6B9D7C', color: 'white' }}>Success</Button>
            </div>
          </div>

          {/* Пример градиентов */}
          <div>
            <h3 className="text-lg mb-3">Градиенты</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="h-32 rounded-lg" style={{ background: 'linear-gradient(135deg, #AA5CCC 0%, #73A0D8 100%)' }} />
              <div className="h-32 rounded-lg" style={{ background: 'linear-gradient(135deg, #DCA98E 0%, #E8B86D 100%)' }} />
              <div className="h-32 rounded-lg" style={{ background: 'linear-gradient(135deg, #88A8A0 0%, #6B9D7C 100%)' }} />
              <div className="h-32 rounded-lg" style={{ background: 'linear-gradient(135deg, #CE6EBB 0%, #D97B6F 100%)' }} />
              <div className="h-32 rounded-lg" style={{ background: 'linear-gradient(135deg, #73A0D8 0%, #76B7B4 100%)' }} />
              <div className="h-32 rounded-lg" style={{ background: 'linear-gradient(135deg, #4B3E51 0%, #7B6480 100%)' }} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
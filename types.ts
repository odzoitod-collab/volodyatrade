import React from 'react';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Step {
  id: number;
  title: string;
  content: string;
}
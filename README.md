# Little Sprouts Daycare 🌱

A modern, responsive, and delightful website built for Little Sprouts Daycare. This project features a playful design system, dark/light mode theming, and a fully functional contact form integrated with EmailJS.

![Little Sprouts Daycare Banner](https://placehold.co/800x200/FACC15/292524?text=Little+Sprouts+Daycare&font=roboto)

## ✨ Features

- **🎨 Playful & Modern Design**: A custom "Playful" color palette (Warm Off-White, Bright Blue/Turquoise, Sunny Yellow) designed to appeal to parents and children.
- **🌓 Dark/Light Mode**: Fully supported theme switching with system preference detection.
- **📱 Fully Responsive**: Optimized for everything from mobile phones to large desktop screens.
- **📧 Functional Contact Form**:
  - Real-time validation using `zod` and `react-hook-form`.
  - Direct email submission via **EmailJS** (no backend required).
  - Feedback toasts for success and error states.
- **🧩 Component-Based Architecture**: Built with reusable [ShadCN UI](https://ui.shadcn.com/) components.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Library**: [ShadCN UI](https://ui.shadcn.com/) / Radix UI
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

Follow these steps to get the project running locally.

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/little-sprouts-daycare.git
    cd little-sprouts-daycare
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory to configure EmailJS.
    ```bash
    cp .env.example .env
    ```
    Populate it with your keys:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```
    > **Note**: You can get these keys by creating a free account at [EmailJS](https://www.emailjs.com/).

4.  **Start Default Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── mode-toggle.tsx # Theme switcher
│   ├── Navigation.tsx  # Main navbar
│   └── ui/             # ShadCN UI primitives
├── pages/              # Route pages (Home, About, Contact, etc.)
├── schemas/            # Zod validation schemas
├── services/           # API services (contactService.ts)
├── App.tsx             # Main app component & routing
└── index.css           # Global styles & Tailwind configuration
```

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

## 🤝 Contributing

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

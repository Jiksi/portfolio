export interface Project {
    id: string;
    title: string;
    year: string;
    tech: string[];
    description: string;
    imageUrls: string[];
    githubUrl?: string;
    websiteUrl?: string;
}

export const projects: Project[] = [
    {
        id: 'dlh-siplah-terpadu',
        title: 'DLH Siplah Terpadu PPU',
        year: '2023',
        tech: ['Next.js 14', 'Prisma ORM', 'NextAuth.js', 'Firebase Storage'],
        description:
            'A centralized public service and complaint reporting platform for the Environment Agency (DLH) of Penajam Paser Utara. It features a multi-level Role-Based Access Control (RBAC) system with dedicated dashboards for Users, Admins, and Super Admins, integrated with NextAuth.js and Firebase Storage for secure document and data management.',
        imageUrls: [
            'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1551288049-bbbda536ad09?auto=format&fit=crop&q=80&w=800',
        ],
        githubUrl: 'https://github.com/Jiksi/dlh-siplah-ppu',
        websiteUrl: 'https://siplah-ppu.go.id',
    },
    {
        id: 'meranti-creative-lab',
        title: 'Meranti Creative Lab',
        year: '2023',
        tech: ['Next.js', 'Tailwind CSS', 'WordPress API', 'Plaiceholder'],
        description:
            'A modern, high-performance portfolio platform for a creative agency built using a Headless CMS architecture. The project focuses on superior User Experience (UX) and Core Web Vitals optimization, utilizing advanced image placeholder techniques to minimize layout shifts and improve loading speeds.',
        imageUrls: [
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800',
        ],
        githubUrl: 'https://github.com/Jiksi/meranti-lab',
        websiteUrl: 'https://meranticreative.com',
    },
    {
        id: 'indolocations',
        title: 'Indolocations',
        year: '2025',
        tech: [
            'Laravel 11',
            'Inertia.js',
            'React 18',
            'Spatie',
            'Google Socialite',
        ],
        description:
            'A comprehensive location booking and directory platform featuring a sophisticated search engine with multi-criteria filtering. It includes a secure multi-role management system and a professional documentation utility that allows users to export curated location reports to PDF.',
        imageUrls: [
            'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
        ],
        githubUrl: 'https://github.com/Jiksi/indolocation',
        websiteUrl: 'https://indolocation.id',
    },
    {
        id: 'wedding-invitational',
        title: 'Wedding Invitational Website',
        year: '2026',
        tech: ['Laravel 13', 'React 19', 'Tailwind CSS 4', 'WhatsApp API'],
        description:
            'A high-performance digital invitation platform utilizing the latest web technologies for a modern, mobile-responsive UI. Key features include a dynamic Invitation Link Generator for guest personalization via URL parameters and an interactive Guest Wish system integrated with the WhatsApp API.',
        imageUrls: [
            'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800',
        ],
        githubUrl: 'https://github.com/Jiksi/wedding-invitation',
        websiteUrl: 'https://our-wedding-day.com',
    },
];

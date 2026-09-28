const { createApp } = Vue;

createApp({
  data() {
    return {
      currentYear: new Date().getFullYear(), menuOpen: false, scrolled: false, activeSection: 'home', showAllProjects: false, selectedProject: null, formSent: false,
      form: { name: '', email: '', type: '', company: '', message: '' },
      navItems: [{ id: 'home', label: 'HOME' }, { id: 'about', label: 'ABOUT' }, { id: 'work', label: 'WORK' }, { id: 'process', label: 'PROCESS' }, { id: 'experience', label: 'EXPERIENCE' }, { id: 'contact', label: 'CONTACT' }],
      stats: [{ value: '4', label: 'PROFESSIONAL ROLES' }, { value: '9+', label: 'PROJECT SYSTEMS' }, { value: '3.85', label: 'ACADEMIC GPA' }],
      technologies: ['.NET Core', 'Laravel', 'CodeIgniter', 'SQL Server', 'MySQL', 'Flutter'],
      projects: [
        { id: 1, title: 'SIAPP', category: 'BUDGET & PERFORMANCE', theme: 'theme-gray', description: 'Sistem Informasi Anggaran dan Performance Pengamanan untuk mendukung proses kerja internal perusahaan.', problem: 'Data anggaran dan kinerja membutuhkan pengelolaan terpusat agar lebih mudah dipantau.', solution: 'Aplikasi web internal yang menghubungkan proses input, monitoring, dan penyajian informasi.', stack: ['.NET Core', 'SQL Server', 'JavaScript', 'Bootstrap'] },
        { id: 2, title: 'STK Online', category: 'DOCUMENT GOVERNANCE', theme: 'theme-light', description: 'Aplikasi pengelolaan dokumen sistem tata kerja beserta workflow dan kebutuhan publikasinya.', problem: 'Dokumen kerja memerlukan proses digital yang terstruktur dan mudah diakses pengguna.', solution: 'Sistem terpusat untuk pengelolaan dokumen, alur proses, dan pencarian informasi.', stack: ['.NET Core', 'SQL Server', 'JavaScript', 'SSO'] },
        { id: 3, title: 'RKAP Engine', category: 'FINANCIAL PLANNING', theme: 'theme-blue', description: 'Aplikasi internal yang mendukung penyusunan dan pengolahan data rencana kerja dan anggaran perusahaan.', problem: 'Komponen perencanaan anggaran perlu dikonsolidasikan dalam alur yang konsisten.', solution: 'Modul pengelolaan data dan kalkulasi untuk mendukung penyusunan RKAP.', stack: ['.NET Core', 'SQL Server', 'EPPlus', 'Bootstrap'] },
        { id: 4, title: 'Notulen Online', category: 'MEETING MANAGEMENT', theme: 'theme-light', description: 'Sistem pengelolaan meeting dan notulen untuk mendukung dokumentasi serta tindak lanjut rapat.', problem: 'Dokumentasi rapat dan tindak lanjut membutuhkan pencatatan yang lebih terorganisasi.', solution: 'Aplikasi terintegrasi untuk agenda, kehadiran, notulen, approval, dan pelaporan.', stack: ['.NET Core', 'SQL Server', 'QuestPDF', 'Email API'] },
        { id: 5, title: 'VMS', category: 'VEHICLE MANAGEMENT', theme: 'theme-gray', description: 'Vehicle Management System untuk mendukung pengelolaan informasi kendaraan perusahaan.', problem: 'Informasi kendaraan membutuhkan pencatatan dan monitoring pada satu sistem.', solution: 'Aplikasi internal untuk pengelolaan data dan aktivitas kendaraan secara terpusat.', stack: ['.NET Core', 'SQL Server', 'JavaScript', 'Bootstrap'] },
        { id: 6, title: 'SIMBA', category: 'MATERIAL MONITORING', theme: 'theme-blue', description: 'Sistem Informasi Monitoring Barang untuk membantu pemantauan material dan proses dokumennya.', problem: 'Status barang dan dokumen pendukung perlu dilacak lintas proses secara konsisten.', solution: 'Monitoring terpusat yang menghubungkan informasi barang dengan proses operasional.', stack: ['.NET Core', 'SQL Server', 'DataTables', 'REST API'] },
        { id: 7, title: 'SIHP', category: 'LEGAL INFORMATION', theme: 'theme-gray', description: 'Sistem Informasi Hukum PDSI untuk mendukung kebutuhan informasi dan proses fungsi hukum.', problem: 'Informasi hukum internal membutuhkan pengelolaan yang terstruktur.', solution: 'Aplikasi web yang membantu pencatatan, pengelolaan, dan akses informasi hukum.', stack: ['PHP', 'Laravel', 'MySQL', 'JavaScript'] },
        { id: 8, title: 'Timesheet PWTT/PWT', category: 'WORKFORCE SYSTEM', theme: 'theme-light', description: 'Aplikasi timesheet untuk mendukung pencatatan aktivitas dan waktu kerja tenaga kerja.', problem: 'Pencatatan waktu kerja perlu distandardisasi dan mudah direkap.', solution: 'Form digital dan rekap data terpusat untuk mendukung administrasi timesheet.', stack: ['.NET Core', 'SQL Server', 'JavaScript', 'Bootstrap'] },
        { id: 9, title: 'Monitoring Sertifikat', category: 'CERTIFICATE MONITORING', theme: 'theme-blue', description: 'Sistem monitoring sertifikat operator Fungsi MM untuk membantu pemantauan masa berlaku dokumen.', problem: 'Sertifikat operator berisiko terlewat masa berlakunya tanpa monitoring terpusat.', solution: 'Dashboard status dan pengelolaan data sertifikat untuk mendukung tindak lanjut.', stack: ['.NET Core', 'SQL Server', 'EPPlus', 'Bootstrap'] }
      ],
      capabilities: [
        { icon: 'bi bi-code-slash', title: 'WEB DEVELOPMENT', description: 'Mengembangkan aplikasi menggunakan .NET Core, PHP, Laravel, CodeIgniter, HTML, CSS, JavaScript, dan Bootstrap.' },
        { icon: 'bi bi-database', title: 'BACKEND & DATABASE', description: 'Membangun REST API, autentikasi, desain database, serta integrasi MySQL dan SQL Server.' },
        { icon: 'bi bi-phone', title: 'ADDITIONAL STACK', description: 'Memiliki pengalaman menggunakan Dart dengan Flutter serta Python dengan Flask.' },
        { icon: 'bi bi-people', title: 'PROFESSIONAL SKILLS', description: 'Problem solving, communication, teamwork, adaptability, dan time management.' }
      ],
      process: [
        { title: 'DISCOVER', description: 'Memahami pengguna, masalah, aturan bisnis, dan hasil yang diharapkan.' },
        { title: 'STRUCTURE', description: 'Menyusun flow, data model, role, scope, dan prioritas implementasi.' },
        { title: 'BUILD', description: 'Mengembangkan fitur secara modular dengan kode yang mudah dipelihara.' },
        { title: 'VALIDATE', description: 'Menguji proses utama bersama pengguna dan memperbaiki celah workflow.' },
        { title: 'IMPROVE', description: 'Memantau penggunaan, menyempurnakan sistem, dan menyiapkan pengembangan berikutnya.' }
      ],
      experiences: [
        { period: 'SEP 2023 — NOW', role: 'Programmer', company: 'PT. Patra Drilling Contractor', description: 'Mengembangkan dan memelihara aplikasi Non-ERP internal PT Pertamina Drilling Services Indonesia, berkolaborasi dengan Business Analyst dan berbagai fungsi, serta menangani integrasi database, troubleshooting, dan debugging.', stack: '.NET Core · Laravel · CodeIgniter · SQL Server · MySQL' },
        { period: 'JAN 2020 — AUG 2023', role: 'Teacher & Operator', company: 'SMK AN NUR SLAWI', description: 'Mengajar Pemrograman Dasar dan Jaringan Komputer Dasar, mengoperasikan DAPODIK, serta mengembangkan web profile sekolah menggunakan Laravel.', stack: 'Programming Fundamentals · Networking · Laravel · DAPODIK' },
        { period: 'SEP 2022 — FEB 2023', role: 'Back End Developer Internship', company: 'PT. Telkom Indonesia', description: 'Mengembangkan aplikasi internal dan sistem pengajuan legal HAKI, serta melakukan debugging dan perbaikan bug untuk menjaga kualitas aplikasi.', stack: 'PHP · Laravel · MySQL' },
        { period: 'MAY 2018 — APR 2019', role: 'Web Developer', company: 'PT. Whita Aplikasi Nusantara', description: 'Mengembangkan aplikasi klien, membuat antarmuka web, menganalisis kebutuhan bersama tim dan user, serta melakukan troubleshooting aplikasi.', stack: 'PHP · Laravel · MySQL · HTML · CSS · JavaScript · jQuery' }
      ],
      education: [
        { period: '2019 — 2023', institution: 'Politeknik Harapan Bersama', program: 'Bachelor of Applied Computer Science', detail: 'Sarjana Terapan Teknik Informatika · IPK 3.85/4.00' },
        { period: '2015 — 2018', institution: 'SMK Negeri 1 Slawi', program: 'Software Engineering', detail: 'Rekayasa Perangkat Lunak' }
      ]
    };
  },
  computed: { visibleProjects() { return this.showAllProjects ? this.projects : this.projects.slice(0, 3); } },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('keydown', this.handleKeydown);
    this.handleScroll(); this.observeReveal();
  },
  updated() { this.$nextTick(this.observeReveal); },
  beforeUnmount() { window.removeEventListener('scroll', this.handleScroll); window.removeEventListener('keydown', this.handleKeydown); },
  methods: {
    closeMenu() { this.menuOpen = false; },
    handleScroll() {
      this.scrolled = window.scrollY > 12;
      const sections = [...document.querySelectorAll('.section-track')];
      const current = sections.reverse().find(section => section.getBoundingClientRect().top <= 140);
      if (current) this.activeSection = current.id;
    },
    observeReveal() {
      const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
      document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => observer.observe(el));
    },
    openProject(project) { this.selectedProject = project; document.body.classList.add('modal-open'); },
    closeProject() { this.selectedProject = null; document.body.classList.remove('modal-open'); },
    handleKeydown(event) { if (event.key === 'Escape' && this.selectedProject) this.closeProject(); },
    submitForm() { this.formSent = true; this.form = { name: '', email: '', type: '', company: '', message: '' }; }
  }
}).mount('#app');

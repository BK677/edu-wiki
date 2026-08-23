// ============================================
// EDUWIKI - PRODUCTION JAVASCRIPT
// ============================================
console.log('=== EDUWIKI SCRIPT YÜKLENDİ ===');

// =====================
// DİL SİSTEMİ (6 DİL)
// =====================
const translations = {
    tr: {
        siteName: "EduWiki",
        home: "Ana Sayfa",
        courses: "Dersler",
        articles: "Makaleler",
        login: "Giriş Yap",
        register: "Kayıt Ol",
        usernameLabel: "Kullanıcı Adı",
        nameLabel: "Ad Soyad",
        emailLabel: "E-posta",
        passwordLabel: "Şifre",
        confirmPasswordLabel: "Şifre Tekrar",
        heroTitle: "EduWiki",
        heroSubtitle: "Ücretsiz Eğitim ve Bilgi Platformu",
        heroButton: "Keşfetmeye Başla",
        popularCourses: "Popüler Dersler",
        wikiArticles: "Ansiklopedik Makaleler",
        logout: "Çıkış Yap",
        welcome: "Hoş geldin",
        searchPlaceholder: "Ara...",
        resultCount: "gösteriliyor",
        noResults: "Sonuç bulunamadı",
        readMore: "Devamını Oku",
        enrollNow: "Kayıt Ol",
        duration: "Süre",
        rating: "Puan",
        students: "Öğrenci",
        courseContent: "Kurs İçeriği",
        allCategories: "Tüm Kategoriler",
        science: "Bilim",
        technology: "Teknoloji",
        history: "Tarih",
        culture: "Kültür",
        programming: "Programlama",
        web: "Web",
        math: "Matematik",
        design: "Tasarım"
    },
    en: {
        siteName: "EduWiki",
        home: "Home",
        courses: "Courses",
        articles: "Articles",
        login: "Login",
        register: "Register",
        usernameLabel: "Username",
        nameLabel: "Full Name",
        emailLabel: "Email",
        passwordLabel: "Password",
        confirmPasswordLabel: "Confirm Password",
        heroTitle: "EduWiki",
        heroSubtitle: "Free Education and Knowledge Platform",
        heroButton: "Get Started",
        popularCourses: "Popular Courses",
        wikiArticles: "Encyclopedic Articles",
        logout: "Logout",
        welcome: "Welcome",
        searchPlaceholder: "Search...",
        resultCount: "shown",
        noResults: "No results found",
        readMore: "Read More",
        enrollNow: "Enroll Now",
        duration: "Duration",
        rating: "Rating",
        students: "Students",
        courseContent: "Course Content",
        allCategories: "All Categories",
        science: "Science",
        technology: "Technology",
        history: "History",
        culture: "Culture",
        programming: "Programming",
        web: "Web",
        math: "Mathematics",
        design: "Design"
    },
    de: {
        siteName: "EduWiki",
        home: "Startseite",
        courses: "Kurse",
        articles: "Artikel",
        login: "Anmelden",
        register: "Registrieren",
        usernameLabel: "Benutzername",
        nameLabel: "Name",
        emailLabel: "E-Mail",
        passwordLabel: "Passwort",
        confirmPasswordLabel: "Bestätigen",
        heroTitle: "EduWiki",
        heroSubtitle: "Bildungsplattform",
        heroButton: "Loslegen",
        popularCourses: "Beliebte Kurse",
        wikiArticles: "Artikel",
        logout: "Abmelden",
        welcome: "Willkommen",
        searchPlaceholder: "Suchen...",
        resultCount: "angezeigt",
        noResults: "Keine Ergebnisse",
        readMore: "Mehr lesen",
        enrollNow: "Jetzt anmelden",
        duration: "Dauer",
        rating: "Bewertung",
        students: "Schüler",
        courseContent: "Kursinhalt",
        allCategories: "Alle Kategorien",
        science: "Wissenschaft",
        technology: "Technik",
        history: "Geschichte",
        culture: "Kultur",
        programming: "Programmierung",
        web: "Web",
        math: "Mathematik",
        design: "Design"
    },
    ar: {
        siteName: "EduWiki",
        home: "الرئيسية",
        courses: "الدورات",
        articles: "المقالات",
        login: "دخول",
        register: "تسجيل",
        usernameLabel: "اسم المستخدم",
        nameLabel: "الاسم",
        emailLabel: "البريد",
        passwordLabel: "كلمة المرور",
        confirmPasswordLabel: "تأكيد",
        heroTitle: "EduWiki",
        heroSubtitle: "منصة تعليمية",
        heroButton: "ابدأ",
        popularCourses: "الدورات",
        wikiArticles: "المقالات",
        logout: "خروج",
        welcome: "مرحبا",
        searchPlaceholder: "بحث...",
        resultCount: "معروضة",
        noResults: "لا توجد نتائج",
        readMore: "اقرأ المزيد",
        enrollNow: "اشترك الآن",
        duration: "المدة",
        rating: "التقييم",
        students: "طلاب",
        courseContent: "محتوى الدورة",
        allCategories: "جميع الفئات",
        science: "علوم",
        technology: "تكنولوجيا",
        history: "تاريخ",
        culture: "ثقافة",
        programming: "برمجة",
        web: "ويب",
        math: "رياضيات",
        design: "تصميم"
    },
    zh: {
        siteName: "EduWiki",
        home: "主页",
        courses: "课程",
        articles: "文章",
        login: "登录",
        register: "注册",
        usernameLabel: "用户名",
        nameLabel: "姓名",
        emailLabel: "邮箱",
        passwordLabel: "密码",
        confirmPasswordLabel: "确认密码",
        heroTitle: "EduWiki",
        heroSubtitle: "教育平台",
        heroButton: "开始",
        popularCourses: "热门课程",
        wikiArticles: "百科文章",
        logout: "退出",
        welcome: "欢迎",
        searchPlaceholder: "搜索...",
        resultCount: "显示",
        noResults: "没有结果",
        readMore: "阅读更多",
        enrollNow: "立即注册",
        duration: "时长",
        rating: "评分",
        students: "学生",
        courseContent: "课程内容",
        allCategories: "所有类别",
        science: "科学",
        technology: "技术",
        history: "历史",
        culture: "文化",
        programming: "编程",
        web: "网络",
        math: "数学",
        design: "设计"
    },
    ko: {
        siteName: "EduWiki",
        home: "홈",
        courses: "강의",
        articles: "게시글",
        login: "로그인",
        register: "회원가입",
        usernameLabel: "사용자명",
        nameLabel: "이름",
        emailLabel: "이메일",
        passwordLabel: "비밀번호",
        confirmPasswordLabel: "확인",
        heroTitle: "EduWiki",
        heroSubtitle: "교육 플랫폼",
        heroButton: "시작",
        popularCourses: "인기 강의",
        wikiArticles: "백과",
        logout: "로그아웃",
        welcome: "환영",
        searchPlaceholder: "검색...",
        resultCount: "표시",
        noResults: "결과 없음",
        readMore: "더 읽기",
        enrollNow: "지금 등록",
        duration: "기간",
        rating: "평점",
        students: "학생",
        courseContent: "강의 내용",
        allCategories: "전체 카테고리",
        science: "과학",
        technology: "기술",
        history: "역사",
        culture: "문화",
        programming: "프로그래밍",
        web: "웹",
        math: "수학",
        design: "디자인"
    }
};

let currentLang = localStorage.getItem('language') || 'tr';

// =====================
// GLOBAL FUNCTION: changeLanguage
// =====================
window.changeLanguage = function(lang) {
    console.log('[i18n] Dil seçildi:', lang);
    
    if (!translations[lang]) {
        console.warn('[i18n] Dil bulunamadı, varsayılan TR kullanılıyor');
        lang = 'tr';
    }
    
    currentLang = lang;
    localStorage.setItem('language', currentLang);
    updateAllTexts();
    
    // RTL/LTR Direction
    if (currentLang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', currentLang);
    }
    
    console.log('[i18n] Dil güncellendi:', currentLang);
};

function updateAllTexts() {
    console.log('[i18n] Metinler güncelleniyor...');
    
    try {
        const elements = document.querySelectorAll('[data-i18n]');
        let updated = 0;
        
        elements.forEach(function(el) {
            try {
                const key = el.getAttribute('data-i18n');
                const text = translations[currentLang] && translations[currentLang][key];
                
                if (text) {
                    // Placeholder güncelleme (input için)
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = text;
                    } else {
                        el.textContent = text;
                    }
                    updated++;
                } else {
                    console.warn('[i18n] Çeviri bulunamadı:', key);
                }
            } catch (err) {
                console.error('[i18n] Element hatası:', err);
            }
        });
        
        console.log('[i18n]', updated, 'element güncellendi');
        
        // Dil seçici güncelleme
        const selector = document.getElementById('language-selector');
        if (selector) {
            selector.value = currentLang;
        }
        
        // Search placeholder güncelleme
        const searchInput = document.getElementById('search-input');
        if (searchInput && translations[currentLang]) {
            searchInput.placeholder = translations[currentLang].searchPlaceholder || 'Ara...';
        }
        
    } catch (error) {
        console.error('[i18n] Hata:', error);
    }
}

// =====================
// AUTH SYSTEM
// =====================

function getCurrentUser() {
    try {
        const user = localStorage.getItem('currentUser');
        return user ? JSON.parse(user) : null;
    } catch (error) {
        console.error('[Auth] Kullanıcı okuma hatası:', error);
        return null;
    }
}

function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

function setupRegisterForm() {
    const form = document.getElementById('register-form');
    if (!form) return;
    
    console.log('[Auth] Kayıt formu bulundu');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        try {
            const username = document.getElementById('username').value.trim();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirm = document.getElementById('confirm-password').value;
            
            // Validation
            if (!username || !email || !password) {
                alert(currentLang === 'ar' ? 'Lütfen tüm alanları doldurun!' : 'Please fill all fields!');
                return;
            }
            
            if (password.length < 6) {
                alert(currentLang === 'ar' ? 'Şifre en az 6 karakter olmalı!' : 'Password must be at least 6 characters!');
                return;
            }
            
            if (password !== confirm) {
                alert(currentLang === 'ar' ? 'Şifreler uyuşmuyor!' : 'Passwords do not match!');
                return;
            }
            
            // Save user
            const user = { username, name, email, password };
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            console.log('[Auth] Kullanıcı kaydedildi:', username);
            alert((currentLang === 'ar' ? 'Kayıt başarılı! ' : 'Registration successful! ') + (currentLang === 'ar' ? 'Giriş yapabilirsiniz.' : 'You can now login.'));
            window.location.href = 'giris.html';
            
        } catch (error) {
            console.error('[Auth] Kayıt hatası:', error);
            alert(currentLang === 'ar' ? 'Kayıt sırasında hata!' : 'Error during registration!');
        }
    });
}

function setupLoginForm() {
    const form = document.getElementById('login-form');
    if (!form) return;
    
    console.log('[Auth] Giriş formu bulundu');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        try {
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const user = getCurrentUser();
            
            if (!user) {
                alert(currentLang === 'ar' ? 'Kullanıcı bulunamadı! Önce kayıt olun.' : 'User not found! Register first.');
                return;
            }
            
            if (email === user.email && password === user.password) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userName', user.username);
                localStorage.setItem('userData', JSON.stringify(user));
                
                console.log('[Auth] Giriş başarılı:', user.username);
                alert((currentLang === 'ar' ? 'Hoş geldin, ' : 'Welcome, ') + user.username + '!');
                window.location.href = 'dashboard.html';
            } else {
                alert(currentLang === 'ar' ? 'Hatalı giriş!' : 'Invalid credentials!');
            }
            
        } catch (error) {
            console.error('[Auth] Giriş hatası:', error);
            alert(currentLang === 'ar' ? 'Giriş hatası!' : 'Login error!');
        }
    });
}

function setupLogoutButton() {
    const button = document.getElementById('logout-btn');
    if (!button) return;
    
    console.log('[Auth] Çıkış butonu bulundu');
    
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        try {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userName');
            localStorage.removeItem('userData');
            
            console.log('[Auth] Çıkış yapıldı');
            window.location.href = 'site.html';
            
        } catch (error) {
            console.error('[Auth] Çıkış hatası:', error);
        }
    });
}

function setupDashboardUserName() {
    const display = document.getElementById('user-name');
    if (!display) return;
    
    try {
        const storedName = localStorage.getItem('userName');
        if (storedName) {
            display.textContent = storedName;
        }
    } catch (error) {
        console.error('[Auth] Kullanıcı adı hatası:', error);
    }
}

// =====================
// WIKI FUNCTIONS
// =====================

window.filterCategory = function(category) {
    console.log('[Wiki] Kategori filtreleme:', category);
    
    try {
        const articles = document.querySelectorAll('.article-card:not(.hidden)');
        const buttons = document.querySelectorAll('.filter-btn');
        
        // Active button
        buttons.forEach(btn => btn.classList.remove('active'));
        if (event && event.target) event.target.classList.add('active');
        
        // Filter
        let visibleCount = 0;
        articles.forEach(function(article) {
            const articleCategory = article.dataset.category;
            
            if (category === 'all' || articleCategory === category) {
                article.classList.remove('hidden');
                visibleCount++;
            } else {
                article.classList.add('hidden');
            }
        });
        
        updateResultCount(visibleCount, articles.length, 'article');
        
    } catch (error) {
        console.error('[Wiki] Kategori filtreleme hatası:', error);
    }
};

window.filterArticles = function() {
    console.log('[Wiki] Makale arama...');
    
    try {
        const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
        const articles = document.querySelectorAll('.article-card');
        let visibleCount = 0;
        
        articles.forEach(function(article) {
            const title = article.querySelector('h3')?.textContent.toLowerCase() || '';
            const desc = article.querySelector('p')?.textContent.toLowerCase() || '';
            const badges = article.querySelector('.article-badge')?.textContent.toLowerCase() || '';
            
            if (title.includes(searchTerm) || desc.includes(searchTerm) || badges.includes(searchTerm)) {
                article.classList.remove('hidden');
                visibleCount++;
            } else {
                article.classList.add('hidden');
            }
        });
        
        updateResultCount(visibleCount, articles.length, 'article');
        
    } catch (error) {
        console.error('[Wiki] Arama hatası:', error);
    }
};

function updateResultCount(visible, total, type) {
    try {
        const countEl = document.getElementById('result-count');
        if (!countEl) return;
        
        const text = translations[currentLang];
        let message = '';
        
        if (visible === 0) {
            message = text.noResults || 'Sonuç bulunamadı';
        } else if (visible === total) {
            message = currentLang === 'ar' ? 
                'Toplam ' + total + ' sonuç bulundu' : 
                'Total ' + total + ' results found';
        } else {
            message = visible + '/' + total + ' ' + (text.resultCount || '');
        }
        
        countEl.textContent = message;
        console.log('[UI] Sonuç sayısı güncellendi:', message);
        
    } catch (error) {
        console.error('[UI] Sonuç sayısı hatası:', error);
    }
}

// =====================
// WIKI MODAL
// =====================

const articleModal = document.getElementById('article-modal');

if (articleModal) {
    console.log('[Wiki] Modal bulundu');
    
    const modalClose = articleModal.querySelector('.modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            articleModal.classList.remove('show');
            document.body.style.overflow = '';
        });
    }
    
    articleModal.addEventListener('click', function(e) {
        if (e.target === articleModal) {
            articleModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
}

// Read more buttons (GÜNCEL)
document.querySelectorAll('.read-more-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        try {
            const card = this.closest('.article-card');
            const title = card.querySelector('h3')?.textContent || '';
            const badge = card.querySelector('.article-badge')?.textContent || '';
            const category = card.dataset.category || '';
            
            // Anahtar kelime bul
            let articleKey = null;
            Object.keys(articleData).forEach(key => {
                if (articleData[key].title === title || articleData[key].badge === badge) {
                    articleKey = key;
                }
            });
            
            const article = articleData[articleKey] || {
                title: title,
                content: '<p>Makalenin detayları yakında eklenecek...</p>',
                category: category,
                badge: badge
            };
            
            if (articleModal) {
                document.getElementById('modal-title').textContent = article.title;
                document.getElementById('modal-badge').textContent = article.badge;
                
                const articleContent = `
                    <div class="article-content">
                        ${article.content}
                        <hr>
                        <div class="article-meta">
                            <p><strong>Kategori:</strong> ${article.category}</p>
                            <p><strong>Okuma Süresi:</strong> ${article.readingTime || '3 dakika'}</p>
                            <p><strong>Görüntülenme:</strong> ${article.views || '0'}</p>
                        </div>
                    </div>
                `;
                
                document.getElementById('modal-body').innerHTML = articleContent;
                articleModal.classList.add('show');
                document.body.style.overflow = 'hidden';
                
                console.log('[Wiki] Modal açıldı:', article.title);
            }
        } catch (error) {
            console.error('[Wiki] Modal açma hatası:', error);
        }
    });
});
// =====================
// WIKI ARTICLE DATA
// =====================

const articleData = {
    'kuantum': {
        title: 'Kuantum Mekaniği',
        category: 'Bilim',
        badge: 'Fizik',
        content: `
            <p>Kuantum mekaniği, atom altı parçacıkların davranışını inceleyen fiziğin temel dalıdır.</p>
            <h3>Ana Kavramlar</h3>
            <ul>
                <li><strong>Dalga-Parçacık İkiliği:</strong> Parçacıklar hem dalga hem parçacık olarak davranır.</li>
                <li><strong>Belirsizlik İlkesi:</strong> Heisenberg belirsizlik ilkesine göre konum ve momentum aynı anda tam bilinemez.</li>
                <li><strong>Süperpozisyon:</strong> Bir parçacık birden fazla durumda aynı anda bulunabilir.</li>
                <li><strong>Dolanıklık:</strong> İki kuantum parçacığı birbirine bağlı kalabilir.</li>
            </ul>
            <h3>Uygulama Alanları</h3>
            <ul>
                <li>Kuantum bilgisayarlar</li>
                <li>Kriptografi</li>
                <li>MRI teknolojisi</li>
                <li>Lazerler</li>
            </ul>
        `,
        readingTime: '5 dakika',
        views: '12,450'
    },
    'yapay-zeka': {
        title: 'Yapay Zeka',
        category: 'Teknoloji',
        badge: 'AI',
        content: `
            <p>Yapay zeka (AI), makinelerin insan benzeri zeka sergilemesidir.</p>
            <h3>Türleri</h3>
            <ul>
                <li><strong>Zayıf AI:</strong> Belirli görevlerde uzmanlaşmış sistemler (Siri, Alexa)</li>
                <li><strong>Güçlü AI:</strong> İnsan seviyesinde zeka (henüz teorik)</li>
            </ul>
            <h3>Uygulamalar</h3>
            <ul>
                <li>Otomotiv (otonom araçlar)</li>
                <li>Sağlık (teşhis sistemi)</li>
                <li>E-ticaret (öneri sistemleri)</li>
            </ul>
        `,
        readingTime: '7 dakika',
        views: '18,920'
    },
    'blockchain': {
        title: 'Blockchain Teknolojisi',
        category: 'Teknoloji',
        badge: 'Kripto',
        content: `
            <p>Blockchain, dağıtık defter teknolojisiyle güvenli veri saklama sistemidir.</p>
            <h3>Nasıl Çalışır?</h3>
            <ol>
                <li>İşlem yapılır</li>
                <li>İşlem ağa yayınlanır</li>
                <li>Düğüm noktaları işlemi doğrular</li>
                <li>Block oluşturulur ve zincire eklenir</li>
            </ol>
        `,
        readingTime: '6 dakika',
        views: '9,340'
    },
    'uzay-arastirma': {
        title: 'Uzay Araştırması',
        category: 'Bilim',
        badge: 'Astronomi',
        content: `
            <p>Uzay araştırması, atmosfer dışı cisimleri inceleyen bilim dalıdır.</p>
            <h3>Tarihi Gelişim</h3>
            <ul>
                <li>1957: Sputnik 1 (ilk yapay uydu)</li>
                <li>1969: Apollo 11 (Ay'a iniş)</li>
                <li>2021: James Webb Teleskobu</li>
            </ul>
        `,
        readingTime: '8 dakika',
        views: '15,670'
    },
    'clima-change': {
        title: 'İklim Değişikliği',
        category: 'Bilim',
        badge: 'Çevre',
        content: `
            <p>İklim değişikliği, küresel ısınma ve hava koşullarının uzun vadeli değişimidir.</p>
            <h3>Nedenleri</h3>
            <ul>
                <li>Fosil yakıt yanıtılması</li>
                <li>Ormansızlaşma</li>
            </ul>
            <h3>Çözümler</h3>
            <ul>
                <li>Yenilenebilir enerji</li>
                <li>Elektrikli araçlar</li>
            </ul>
        `,
        readingTime: '5 dakika',
        views: '22,100'
    }
};

// =====================
// COURSE DATA
// =====================


// =====================
// COURSE DATA
// =====================

const courseData = {
    python: {
        title: 'Python Programlama',
        level: 'Başlangıç',
        duration: '12 saat',
        rating: '4.8',
        students: '1,234 öğrenci',
        videoId: 'rfscVS0vtbw',
        description: 'Python ile sıfırdan ileri seviyeye programlama öğrenin.',
        modules: ['Kurulum', 'Değişkenler', 'Döngüler', 'Fonksiyonlar', 'OOP'],
        category: 'programming'
    },
    web: {
        title: 'Web Geliştirme Bootcamp',
        level: 'Orta',
        duration: '18 saat',
        rating: '4.9',
        students: '2,456 öğrenci',
        videoId: 'UB1O30fR-EE',
        description: 'HTML, CSS, JavaScript ile modern web siteleri.',
        modules: ['HTML5', 'CSS3', 'JavaScript', 'API Entegrasyonu'],
        category: 'web'
    },
    physics: {
        title: 'Fizik Temelleri',
        level: 'Başlangıç',
        duration: '8 saat',
        rating: '4.7',
        students: '890 öğrenci',
        videoId: 'Q1tQEeDVpGs',
        description: 'Klasik fizikten kuantuma bilimin temelleri.',
        modules: ['Mekanik', 'Enerji', 'Elektrik', 'Işık'],
        category: 'science'
    },
    java: {
        title: 'Java ile OOP',
        level: 'İleri',
        duration: '20 saat',
        rating: '4.6',
        students: '1,567 öğrenci',
        videoId: 'eIrMbAQSU34',
        description: 'Java dilinde Nesne Yönelimli Programlama.',
        modules: ['Java Sintaksı', 'Class', 'Inheritance'],
        category: 'programming'
    },
    linear: {
        title: 'Lineer Cebir',
        level: 'Orta',
        duration: '15 saat',
        rating: '4.8',
        students: '756 öğrenci',
        videoId: 'fNk_zzaMoSs',
        description: 'Matrisler, vektörler ve lineer dönüşümler.',
        modules: ['Vektörler', 'Matris İşlemleri', 'Eigenvalues'],
        category: 'math'
    },
    uiux: {
        title: 'UI/UX Tasarım',
        level: 'Başlangıç',
        duration: '10 saat',
        rating: '4.9',
        students: '1,890 öğrenci',
        videoId: 'ZaORJPZ8qKE',
        description: 'Kullanıcı arayüzü ve deneyimi tasarım.',
        modules: ['Kullanıcı Araştırması', 'Wireframe', 'Prototipleme'],
        category: 'design'
    }
};

// =====================
// COURSE MODAL
// =====================

const courseModal = document.getElementById('course-modal');

window.openCourseModal = function(courseKey) {
    console.log('[Courses] Kurs açılıyor:', courseKey);
    
    // Authentication check
    if (!isLoggedIn()) {
        const msg = currentLang === 'ar' ? 
            'Bu derse kaydolmak için giriş yapmalısınız!' : 
            'You must login to enroll in this course!';
        
        alert(msg);
        setTimeout(function() {
            window.location.href = 'giris.html';
        }, 1500);
        return;
    }
    
    const course = courseData[courseKey];
    if (!course) {
        console.error('[Courses] Kurs bulunamadı:', courseKey);
        return;
    }
    
    if (courseModal) {
        try {
            // Populate modal
            document.getElementById('modal-course-title').textContent = course.title;
            document.getElementById('modal-course-badge').textContent = course.level;
            document.getElementById('modal-duration').textContent = course.duration;
            document.getElementById('modal-rating').textContent = course.rating;
            document.getElementById('modal-students').textContent = course.students;
            
            // YouTube embed
            const videoHtml = `
                <div class="video-container">
                    <iframe 
                        src="https://www.youtube.com/embed/${course.videoId}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        style="width: 100%; height: 400px; border-radius: 10px;"
                    ></iframe>
                </div>
            `;
            
            // Modules list
            const modulesHtml = course.modules.map(function(m) {
                return '<li class="module-item">✓ ' + m + '</li>';
            }).join('');
            
            const contentHtml = `
                ${videoHtml}
                <h3>${translations[currentLang]?.courseContent || 'Kurs İçeriği'}</h3>
                <p>${course.description}</p>
                <ul class="course-modules">${modulesHtml}</ul>
            `;
            
            document.getElementById('modal-course-content').innerHTML = contentHtml;
            
            // Badge styling
            const badge = document.getElementById('modal-course-badge');
            badge.className = 'modal-course-badge course-badge';
            if (course.level === 'Başlangıç') badge.classList.add('beginner-tag');
            else if (course.level === 'Orta') badge.classList.add('intermediate-tag');
            else badge.classList.add('advanced-tag');
            
            courseModal.classList.add('show');
            document.body.style.overflow = 'hidden';
            
            console.log('[Courses] Modal açıldı:', course.title);
            
        } catch (error) {
            console.error('[Courses] Modal dolgu hatası:', error);
        }
    }
};

if (courseModal) {
    console.log('[Courses] Course Modal bulundu');
    
    const courseModalClose = courseModal.querySelector('.modal-close');
    if (courseModalClose) {
        courseModalClose.addEventListener('click', function() {
            courseModal.classList.remove('show');
            document.body.style.overflow = '';
        });
    }
    
    courseModal.addEventListener('click', function(e) {
        if (e.target === courseModal) {
            courseModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
}

// =====================
// COURSE SEARCH & FILTER
// =====================

window.filterCourses = function() {
    console.log('[Courses] Ders arama...');
    
    try {
        const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
        const courses = document.querySelectorAll('.course-card');
        let visibleCount = 0;
        
        courses.forEach(function(course) {
            const title = course.querySelector('h3')?.textContent.toLowerCase() || '';
            const desc = course.querySelector('p')?.textContent.toLowerCase() || '';
            
            if (title.includes(searchTerm) || desc.includes(searchTerm)) {
                course.classList.remove('hidden');
                visibleCount++;
            } else {
                course.classList.add('hidden');
            }
        });
        
        updateCourseResultCount(visibleCount, courses.length);
        
    } catch (error) {
        console.error('[Courses] Arama hatası:', error);
    }
};

window.filterCourseCategory = function(category) {
    console.log('[Courses] Ders kategori filtreleme:', category);
    
    try {
        const courses = document.querySelectorAll('.course-card');
        const buttons = document.querySelectorAll('.filter-btn');
        
        // Active button
        buttons.forEach(btn => btn.classList.remove('active'));
        if (event && event.target) event.target.classList.add('active');
        
        // Filter
        let visibleCount = 0;
        courses.forEach(function(course) {
            const courseCategory = course.dataset.category;
            
            if (category === 'all' || courseCategory === category) {
                course.classList.remove('hidden');
                visibleCount++;
            } else {
                course.classList.add('hidden');
            }
        });
        
        updateCourseResultCount(visibleCount, courses.length);
        
    } catch (error) {
        console.error('[Courses] Kategori filtreleme hatası:', error);
    }
};

function updateCourseResultCount(visible, total) {
    try {
        const countEl = document.getElementById('result-count');
        if (!countEl) return;
        
        const text = translations[currentLang];
        let message = '';
        
        if (visible === 0) {
            message = text.noResults || 'Sonuç bulunamadı';
        } else if (visible === total) {
            message = currentLang === 'ar' ? 
                'Toplam ' + total + ' ders bulundu' : 
                'Total ' + total + ' courses found';
        } else {
            message = visible + '/' + total + ' ' + (text.resultCount || '');
        }
        
        countEl.textContent = message;
        console.log('[UI] Ders sonucu güncellendi:', message);
        
    } catch (error) {
        console.error('[UI] Ders sonuç hatası:', error);
    }
}

// =====================
// KEYBOARD SHORTCUTS
// =====================

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        console.log('[Keyboard] ESC tuşuna basıldı');
        
        try {
            if (articleModal && articleModal.classList.contains('show')) {
                articleModal.classList.remove('show');
                document.body.style.overflow = '';
            }
            if (courseModal && courseModal.classList.contains('show')) {
                courseModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        } catch (error) {
            console.error('[Keyboard] ESC hatası:', error);
        }
    }
    
    // Ctrl+F for search focus
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.focus();
    }
});

// =====================
// PAGE INITIALIZATION
// =====================

document.addEventListener('DOMContentLoaded', function() {
    console.log('=== DOM HAZIR! ===');
    
    // Initialize i18n
    updateAllTexts();
    
    // Setup auth
    setupRegisterForm();
    setupLoginForm();
    setupLogoutButton();
    setupDashboardUserName();
    
    // Setup search listeners if input exists
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        // Wiki search (if on wiki page)
        const wikiPage = document.querySelector('.wiki-section');
        if (wikiPage) {
            searchInput.addEventListener('input', filterArticles);
        }
        
        // Course search (if on courses page)
        const coursePage = document.querySelector('.courses-section');
        if (coursePage) {
            searchInput.addEventListener('input', filterCourses);
        }
    }
    
    console.log('=== EDUWIKI HAZIR! ===');
    console.log('Current Language:', currentLang);
    console.log('Logged In:', isLoggedIn());
});

// =====================
// UTILITY FUNCTIONS
// =====================

window.getTranslation = function(key) {
    return translations[currentLang] && translations[currentLang][key];
};

window.log = function(type, message) {
    console.log('[' + type.toUpperCase() + ']', message);
};

// Debug mode
window.debugMode = false;
if (window.debugMode) {
    console.log('[DEBUG] Debug modu aktif');
}

console.log('=== EDUWIKI SCRIPT TAM YÜKLENDİ ===');
console.log('hello')

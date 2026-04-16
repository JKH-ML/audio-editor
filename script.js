document.addEventListener('DOMContentLoaded', () => {
    // --- Multi-language System ---
    const translations = {
        ko: {
            nav_tagger: "Tagger",
            nav_cutter: "Cutter",
            nav_merger: "Merger",
            nav_converter: "Converter",
            tagger_title: "MP3 Auto Tagger",
            cost_link: "API 비용 알아보기",
            label_model: "AI Model",
            label_api_key: "API Key",
            placeholder_api_key: "Enter your secret key",
            drop_zone_text: "MP3 파일을 여기에 드래그하거나 클릭하세요",
            drop_zone_sub: "최대 50MB, .mp3 형식 지원",
            th_art: "Art",
            th_filename: "파일명",
            th_artist: "아티스트",
            th_title: "제목",
            th_search_query: "검색어",
            th_lyrics: "가사",
            th_clean_name: "정리된 파일명",
            th_manage: "관리",
            btn_ai_magic: "AI 매직 채우기",
            btn_fetch_lyrics_all: "가사 전체 검색",
            btn_fetch_art_all: "아트 전체 검색",
            btn_apply_download: "태그 적용 및 다운로드 (.zip)",
            log_title: "활동 로그",
            cutter_title: "MP3 Cutter",
            cutter_desc: "오디오 파일의 원하는 구간을 정밀하게 자릅니다.",
            placeholder_ready: "기능이 곧 추가됩니다!",
            merger_title: "MP3 Merger",
            merger_desc: "여러 개의 오디오 파일을 하나로 합칩니다.",
            converter_title: "Audio Converter",
            converter_desc: "다양한 오디오 포맷 간의 변환을 지원합니다.",
            modal_cost_title: "AI 사용 예상 비용 안내",
            cost_item1_title: "gpt-4o-mini 모델 기준",
            cost_item1_desc: "현재 가장 경제적인 모델을 사용합니다.",
            cost_item2_title: "1곡당 약 <b>0.04원</b>",
            cost_item2_desc: "곡당 평균 100 토큰 내외로 소모됩니다. (1,000곡 작업 시 단돈 <b>40원</b>!)",
            cost_item3_title: "직접 수정 시 0원",
            cost_item3_desc: "AI 기능을 사용하지 않고 텍스트를 직접 입력하면 비용이 발생하지 않습니다.",
            modal_cost_footer: "※ 이 정보는 <b>gpt-4o-mini</b>의 표준 API 단가 및 이 도구의 시스템 프롬프트를 기준으로 계산된 추정치입니다. 실제 비용은 곡 제목의 길이에 따라 소폭 다를 수 있습니다.",
            optgroup_openai: "OpenAI",
            opt_gpt4o_mini: "gpt-4o-mini (가장 추천)",
            opt_gpt4o_high: "gpt-4o (고성능)",
            optgroup_gemini: "Google Gemini",
            opt_gemini_2_flash: "gemini-2.0-flash (최신/추천)",
            opt_gemini_1_5_flash: "gemini-1.5-flash (안정적)",
            opt_gemini_1_5_pro: "gemini-1.5-pro (고성능)",
            modal_ai_title: "AI 분석 설정",
            btn_run_ai: "분석 시작",
            ai_modal_hint: "API 키는 브라우저에만 저장되며 보안상 안전합니다.",
            label_remember_key: "이 브라우저에서 기억하기"
        },
        en: {
            nav_tagger: "Tagger",
            nav_cutter: "Cutter",
            nav_merger: "Merger",
            nav_converter: "Converter",
            tagger_title: "MP3 Auto Tagger",
            cost_link: "View API Costs",
            label_model: "AI Model",
            label_api_key: "API Key",
            placeholder_api_key: "Enter your secret key",
            drop_zone_text: "Drag and drop MP3 files here or click",
            drop_zone_sub: "Max 50MB, .mp3 format supported",
            th_art: "Art",
            th_filename: "Filename",
            th_artist: "Artist",
            th_title: "Title",
            th_search_query: "Search Query",
            th_lyrics: "Lyrics",
            th_clean_name: "Clean Filename",
            th_manage: "Manage",
            btn_ai_magic: "AI Magic Fill",
            btn_fetch_lyrics_all: "Fetch All Lyrics",
            btn_fetch_art_all: "Fetch All Album Art",
            btn_apply_download: "Apply Tags & Download (.zip)",
            log_title: "Activity Log",
            cutter_title: "MP3 Cutter",
            cutter_desc: "Precisely cut sections of audio files.",
            placeholder_ready: "Coming soon!",
            merger_title: "MP3 Merger",
            merger_desc: "Merge multiple audio files into one.",
            converter_title: "Audio Converter",
            converter_desc: "Support conversion between various audio formats.",
            modal_cost_title: "Estimated AI Usage Cost",
            cost_item1_title: "Based on gpt-4o-mini model",
            cost_item1_desc: "Uses the most economical model available.",
            cost_item2_title: "Approx. <b>$0.00003</b> per song",
            cost_item2_desc: "Consumes about 100 tokens per song on average. (Only <b>$0.03</b> for 1,000 songs!)",
            cost_item3_title: "Free ($0) when editing manually",
            cost_item3_desc: "No cost if you enter text directly without using AI functions.",
            modal_cost_footer: "* This information is an estimate based on <b>gpt-4o-mini</b>'s standard API unit price and the system prompt. Actual costs may vary slightly depending on title length.",
            optgroup_openai: "OpenAI",
            opt_gpt4o_mini: "gpt-4o-mini (Recommended)",
            opt_gpt4o_high: "gpt-4o (High Performance)",
            optgroup_gemini: "Google Gemini",
            opt_gemini_2_flash: "gemini-2.0-flash (Latest/Recommended)",
            opt_gemini_1_5_flash: "gemini-1.5-flash (Stable)",
            opt_gemini_1_5_pro: "gemini-1.5-pro (High Performance)",
            modal_ai_title: "AI Analysis Settings",
            btn_run_ai: "Run Analysis",
            ai_modal_hint: "Your API key is stored locally in your browser and is secure."
        },
        zh: {
            nav_tagger: "标签器",
            nav_cutter: "切割器",
            nav_merger: "合并器",
            nav_converter: "转换器",
            tagger_title: "MP3 自动标签器",
            cost_link: "查看 API 费用",
            label_model: "AI 模型",
            label_api_key: "API 密钥",
            placeholder_api_key: "输入您的密钥",
            drop_zone_text: "将 MP3 文件拖放到此处或点击上传",
            drop_zone_sub: "最大 50MB，支持 .mp3 格式",
            th_art: "封面",
            th_filename: "文件名",
            th_artist: "艺术家",
            th_title: "标题",
            th_search_query: "搜索词",
            th_lyrics: "歌词",
            th_clean_name: "整理后的文件名",
            th_manage: "管理",
            btn_ai_magic: "AI 智能填写",
            btn_fetch_lyrics_all: "获取全部歌词",
            btn_fetch_art_all: "获取全部专辑封面",
            btn_apply_download: "应用标签并下载 (.zip)",
            log_title: "活动日志",
            cutter_title: "MP3 切割器",
            cutter_desc: "精确切割音频文件的所需部分。",
            placeholder_ready: "即将推出！",
            merger_title: "MP3 合并器",
            merger_desc: "将多个音频文件合并为一个。",
            converter_title: "音频转换器",
            converter_desc: "支持各种音频格式之间的转换。",
            modal_cost_title: "AI 使用预计费用说明",
            cost_item1_title: "基于 gpt-4o-mini 模型",
            cost_item1_desc: "目前使用最经济的模型。",
            cost_item2_title: "每首歌约 <b>¥0.0002</b>",
            cost_item2_desc: "每首歌平均消耗约 100 个 token。（处理 1,000 首歌仅需 <b>¥0.2</b>！）",
            cost_item3_title: "手动修改免费 (0 元)",
            cost_item3_desc: "如果不使用 AI 功能直接输入文本，则不会产生费用。",
            modal_cost_footer: "※ 此信息是基于 <b>gpt-4o-mini</b> 的标准 API 单价和本工具的系统提示词计算的预估值。实际费用可能会因歌曲标题长度而略有不同。",
            optgroup_openai: "OpenAI",
            opt_gpt4o_mini: "gpt-4o-mini (最推荐)",
            opt_gpt4o_high: "gpt-4o (高性能)",
            optgroup_gemini: "Google Gemini",
            opt_gemini_2_flash: "gemini-2.0-flash (最新/推荐)",
            opt_gemini_1_5_flash: "gemini-1.5-flash (稳定)",
            opt_gemini_1_5_pro: "gemini-1.5-pro (高性能)",
            modal_ai_title: "AI 分析设置",
            btn_run_ai: "开始分析",
            ai_modal_hint: "API 密钥仅存储在浏览器中，安全可靠。",
            label_remember_key: "在此浏览器上记住",
            status_processing: "正在处理文件...",
            status_generating_zip: "正在生成 ZIP 压缩包...",
            status_done: "完成！已成功处理 {success} 个文件{fail}",
            status_fail_zip: "生成 ZIP 失败：",
            status_no_files: "没有文件被成功处理。",
            analyzing: "分析中..."
        },
        ja: {
            nav_tagger: "タガー",
            nav_cutter: "カッター",
            nav_merger: "マージャー",
            nav_converter: "コンバーター",
            tagger_title: "MP3オートタガー",
            cost_link: "API費用を確認する",
            label_model: "AIモデル",
            label_api_key: "APIキー",
            placeholder_api_key: "秘密鍵を入力してください",
            drop_zone_text: "MP3ファイルをここにドラッグまたはクリックしてください",
            drop_zone_sub: "最大50MB、.mp3形式対応",
            th_art: "アート",
            th_filename: "ファイル名",
            th_artist: "アーティスト",
            th_title: "タイトル",
            th_search_query: "検索クエリ",
            th_lyrics: "歌詞",
            th_clean_name: "整理されたファイル名",
            th_manage: "管理",
            btn_ai_magic: "AIマジックフィル",
            btn_fetch_lyrics_all: "全歌詞を取得",
            btn_fetch_art_all: "全アートを取得",
            btn_apply_download: "タグ適用してダウンロード (.zip)",
            log_title: "アクティビティログ",
            cutter_title: "MP3カッター",
            cutter_desc: "オーディオファイルの指定した区間を正確にカットします。",
            placeholder_ready: "機能はまもなく追加されます！",
            merger_title: "MP3マージャー",
            merger_desc: "複数のオーディオファイルを1つに結合します。",
            converter_title: "オーディオコンバーター",
            converter_desc: "様々なオーディオ形式間の変換をサポートします。",
            modal_cost_title: "AI使用の推定費用案内",
            cost_item1_title: "gpt-4o-mini モデル基準",
            cost_item1_desc: "現在、最も経済的なモデルを使用しています。",
            cost_item2_title: "1曲あたり約0.04ウォン",
            cost_item2_desc: "1曲あたり平均100トークン前後を消費します（1,000曲作業してもわずか40ウォン！）。",
            cost_item3_title: "直接編集時は0円 (無料)",
            cost_item3_desc: "AI機能を使わずに直接テキストを入力する場合、費用は発生しません。",
            modal_cost_footer: "※ この情報は gpt-4o-mini の標準API単価およびこのツールのシステムプロンプトに基づいた推定値です。実際の費用は曲のタイトルの長さによって多少異なる場合があります。",
            optgroup_openai: "OpenAI",
            opt_gpt4o_mini: "gpt-4o-mini (最も推奨)",
            opt_gpt4o_high: "gpt-4o (高性能)",
            optgroup_gemini: "Google Gemini",
            opt_gemini_2_flash: "gemini-2.0-flash (最新/推奨)",
            opt_gemini_1_5_flash: "gemini-1.5-flash (安定的)",
            opt_gemini_1_5_pro: "gemini-1.5-pro (高性能)",
            modal_ai_title: "AI分析設定",
            btn_run_ai: "分析開始",
            ai_modal_hint: "APIキーはブラウザにのみ保存され, 安全です。",
            label_remember_key: "このブラウザで記憶する",
            status_processing: "ファイルを処理中...",
            status_generating_zip: "ZIPアーカイブを生成中...",
            status_done: "完了！ {success}個のファイルの処理に成功しました{fail}",
            status_fail_zip: "ZIPの生成に失敗しました: ",
            status_no_files: "正常に処理されたファイルはありません。",
            analyzing: "分析中..."
        }
    };

    const langSelect = document.getElementById('lang-select');

    function applyLanguage(lang) {
        const t = translations[lang];
        if (!t) return;

        // Update dropdown value
        const ls = document.getElementById('lang-select');
        if (ls) ls.value = lang;

        // Update textContent or innerHTML for data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                if (el.tagName === 'OPTGROUP') {
                    el.label = t[key];
                } else if (el.tagName === 'OPTION') {
                    el.textContent = t[key];
                } else if (key.includes('title') || key.includes('footer') || key.includes('text') || key.includes('desc')) {
                    el.innerHTML = t[key];
                } else {
                    // Preservation logic for icons
                    const icon = el.querySelector('i, span.fa-stack');
                    if (icon) {
                        // Clear text nodes but keep the icon
                        Array.from(el.childNodes).forEach(node => {
                            if (node.nodeType === Node.TEXT_NODE) {
                                el.removeChild(node);
                            }
                        });
                        // Append the new text
                        el.appendChild(document.createTextNode(' ' + t[key]));
                    } else {
                        el.textContent = t[key];
                    }
                }
            }
        });

        // Update placeholders for data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key]) {
                el.placeholder = t[key];
            }
        });

        localStorage.setItem('language', lang);
    }

    // Initialize language
    const savedLang = localStorage.getItem('language') || 'ko';
    applyLanguage(savedLang);

    // Language selection event listener
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            applyLanguage(e.target.value);
        });
    }

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        
        if (isDark) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // --- AI Settings Logic ---
    const aiMagicBtn = document.getElementById('ai-magic-btn');
    const aiModelCombined = document.getElementById('ai-model-combined');
    const aiApiKey = document.getElementById('ai-api-key');
    const rememberKeyCheckbox = document.getElementById('remember-key');
    const aiSettingsModal = document.getElementById('ai-settings-modal');
    const aiSettingsClose = document.getElementById('ai-settings-close');
    const runAiBtn = document.getElementById('run-ai-btn');
    const fetchAllLyricsBtn = document.getElementById('fetch-lyrics-all-btn');
    const fetchAllArtBtn = document.getElementById('fetch-art-all-btn');
    
    // --- Art Search Modal Logic ---
    const artSearchModal = document.getElementById('art-search-modal');
    const artSearchClose = document.getElementById('art-search-close');
    const artSearchInput = document.getElementById('art-search-input');
    const modalArtSearchBtn = document.getElementById('modal-art-search-btn');
    let currentItemForArtSearch = null;

    artSearchClose.onclick = () => artSearchModal.style.display = 'none';
    
    window.addEventListener('click', (event) => {
        if (event.target === artSearchModal) {
            artSearchModal.style.display = 'none';
        }
        if (event.target === aiSettingsModal) {
            aiSettingsModal.style.display = 'none';
        }
    });

    modalArtSearchBtn.onclick = () => {
        if (currentItemForArtSearch) {
            const searchTerm = artSearchInput.value.trim();
            if (searchTerm) {
                artSearchModal.style.display = 'none';
                performArtSearch(currentItemForArtSearch, searchTerm, false);
            }
        }
    };

    // --- Batch Fetching Logic ---
    const fetchLyricsForItem = async (item, silent = false) => {
        const artist = item.artist.trim();
        const title = item.title.trim();
        if (!artist || !title) return;

        // Build candidates in order:
        // 1. 한글 원본 artist + title (lrclib에 한글로 등록된 경우)
        // 2. AI search_query의 첫 단어를 artist, 나머지를 title로 (영문 아티스트명으로 등록된 경우 - 예: IU, BTS)
        // 3. 원본을 q= 로 통검색
        const candidates = [
            { artist_name: artist, track_name: title }
        ];
        if (item.searchQuery) {
            const parts = item.searchQuery.trim().split(/\s+/);
            if (parts.length >= 2) {
                candidates.push({ artist_name: parts[0], track_name: parts.slice(1).join(' ') });
            }
            candidates.push({ q: item.searchQuery });
        }

        for (const params of candidates) {
            const queryDesc = params.q ? `q="${params.q}"` : `artist="${params.artist_name}" title="${params.track_name}"`;
            try {
                const queryStr = params.q
                    ? `q=${encodeURIComponent(params.q)}`
                    : `artist_name=${encodeURIComponent(params.artist_name)}&track_name=${encodeURIComponent(params.track_name)}`;
                const url = `https://lrclib.net/api/search?${queryStr}`;
                if (!silent) logMessage(`[Lyrics] 시도: lrclib ${queryDesc}`, 'info');
                const response = await fetch(url);
                if (response.ok) {
                    const results = await response.json();
                    if (Array.isArray(results) && results.length > 0) {
                        const data = results[0];
                        const foundLyrics = data.syncedLyrics || data.plainLyrics;
                        if (foundLyrics) {
                            item.lyrics = foundLyrics;
                            if (!silent) logMessage(`[Lyrics] 성공: "${data.artistName} - ${data.trackName}"`, 'success');
                            if (item.updateRowUI) item.updateRowUI();
                            return true;
                        } else {
                            if (!silent) logMessage(`[Lyrics] 결과 있으나 가사 없음: ${queryDesc}`, 'error');
                        }
                    } else {
                        if (!silent) logMessage(`[Lyrics] 결과 없음: ${queryDesc}`, 'error');
                    }
                }
            } catch (err) {
                if (!silent) logMessage(`[Lyrics] 오류: ${queryDesc} → ${err.message}`, 'error');
            }
        }

        if (!silent) logMessage(`[Lyrics] 최종 실패: ${artist} - ${title}`, 'error');
        return false;
    };

    const CORS_PROXY = 'https://music-cors-proxy.banghak2da.workers.dev/?url=';

    const proxyFetch = (url) => fetch(CORS_PROXY + encodeURIComponent(url));

    const fetchArtFromUrl = async (artUrl) => {
        const imgRes = await fetch(artUrl);
        if (!imgRes.ok) throw new Error(`Failed to fetch image: ${imgRes.status}`);
        const blob = await imgRes.blob();
        return await blob.arrayBuffer();
    };

    const performArtSearch = async (item, searchTerm, silent = false) => {
        if (!searchTerm) return;

        const queries = [searchTerm];
        if (item.searchQuery && item.searchQuery !== searchTerm) queries.push(item.searchQuery);

        for (const query of queries) {
            // 1. Try iTunes (via proxy)
            try {
                if (!silent) logMessage(`[Art] 시도: iTunes "${query}"`, 'info');
                const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=1&country=kr`;
                const response = await proxyFetch(url);
                if (response.ok) {
                    const data = await response.json();
                    if (data.results && data.results.length > 0) {
                        let artUrl = data.results[0].artworkUrl100;
                        if (artUrl) {
                            artUrl = artUrl.replace('100x100bb', '600x600bb');
                            item.artBuffer = await fetchArtFromUrl(artUrl);
                            if (!silent) logMessage(`[Art] 성공 (iTunes): "${data.results[0].artistName} - ${data.results[0].trackName}"`, 'success');
                            if (item.updateRowUI) item.updateRowUI();
                            return true;
                        }
                    } else {
                        if (!silent) logMessage(`[Art] iTunes 결과 없음: "${query}"`, 'error');
                    }
                }
            } catch (err) {
                if (!silent) logMessage(`[Art] iTunes 오류: "${query}" → ${err.message}`, 'error');
            }

            // 2. Try Deezer (via proxy)
            try {
                if (!silent) logMessage(`[Art] 시도: Deezer "${query}"`, 'info');
                const url = `https://api.deezer.com/search?q=${encodeURIComponent(query)}&limit=1`;
                const response = await proxyFetch(url);
                if (response.ok) {
                    const data = await response.json();
                    if (data.data && data.data.length > 0) {
                        const artUrl = data.data[0].album?.cover_big;
                        if (artUrl) {
                            item.artBuffer = await fetchArtFromUrl(artUrl);
                            if (!silent) logMessage(`[Art] 성공 (Deezer): "${data.data[0].artist.name} - ${data.data[0].title}"`, 'success');
                            if (item.updateRowUI) item.updateRowUI();
                            return true;
                        }
                    } else {
                        if (!silent) logMessage(`[Art] Deezer 결과 없음: "${query}"`, 'error');
                    }
                }
            } catch (err) {
                if (!silent) logMessage(`[Art] Deezer 오류: "${query}" → ${err.message}`, 'error');
            }
        }

        if (!silent) logMessage(`[Art] 최종 실패: ${searchTerm}`, 'error');
        return false;
    };

    fetchAllLyricsBtn.onclick = async () => {
        if (uploadedFiles.length === 0) return;
        syncCurrentPageData();
        fetchAllLyricsBtn.disabled = true;
        logMessage(`Starting batch lyrics fetch for ${uploadedFiles.length} files...`, 'info');
        
        for (let i = 0; i < uploadedFiles.length; i++) {
            const item = uploadedFiles[i];
            await fetchLyricsForItem(item, false);
            if (i % 5 === 0) logMessage(`Processing lyrics: ${i + 1}/${uploadedFiles.length}...`, 'info');
        }
        
        renderTable();
        fetchAllLyricsBtn.disabled = false;
        logMessage(`Batch lyrics fetch complete.`, 'success');
    };

    fetchAllArtBtn.onclick = async () => {
        if (uploadedFiles.length === 0) return;
        syncCurrentPageData();
        fetchAllArtBtn.disabled = true;
        logMessage(`Starting batch album art fetch for ${uploadedFiles.length} files...`, 'info');
        
        for (let i = 0; i < uploadedFiles.length; i++) {
            const item = uploadedFiles[i];
            const searchTerm = `${item.artist.trim()} ${item.title.trim()}`;
            await performArtSearch(item, searchTerm, false);
            if (i % 5 === 0) logMessage(`Processing art: ${i + 1}/${uploadedFiles.length}...`, 'info');
        }
        
        renderTable();
        fetchAllArtBtn.disabled = false;
        logMessage(`Batch album art fetch complete.`, 'success');
    };

    // Auto-save settings on change
    const saveAISettings = () => {
        localStorage.setItem('ai_model_combined', aiModelCombined.value);
    };


    // Load saved AI settings
    const loadAISettings = () => {
        const savedCombined = localStorage.getItem('ai_model_combined');
        if (savedCombined) aiModelCombined.value = savedCombined;
        
        const rememberEnabled = localStorage.getItem('remember_key_enabled') === 'true';
        rememberKeyCheckbox.checked = rememberEnabled;
        
        if (rememberEnabled) {
            aiApiKey.value = localStorage.getItem('ai_api_key') || '';
        } else {
            aiApiKey.value = '';
        }
    };
    loadAISettings();

    aiModelCombined.addEventListener('change', saveAISettings);

    // Modal Control
    aiMagicBtn.onclick = () => {
        if (uploadedFiles.length === 0) {
            alert('Please upload some MP3 files first!');
            return;
        }
        aiSettingsModal.style.display = 'flex';
    };

    aiSettingsClose.onclick = () => aiSettingsModal.style.display = 'none';
    
    runAiBtn.onclick = () => {
        const apiKey = aiApiKey.value.trim();
        if (!apiKey) {
            alert('Please set your API Key first!');
            return;
        }

        const isRemember = rememberKeyCheckbox.checked;
        localStorage.setItem('remember_key_enabled', isRemember);
        if (isRemember) {
            localStorage.setItem('ai_api_key', apiKey);
        } else {
            localStorage.removeItem('ai_api_key');
        }

        aiSettingsModal.style.display = 'none';
        startBulkAIAnalysis();
    };

    window.addEventListener('click', (event) => {
        if (event.target === aiSettingsModal) {
            aiSettingsModal.style.display = 'none';
        }
    });

    const aiSystemPromptDefault = `You are a world-class music database editor. You must extract the CORRECT performing artist and song title from messy filenames.

CRITICAL RULES:
1. UPLOADER REJECTION: Text in brackets at the VERY START of the filename (e.g., [Jaeguchi], [1theK], [HYBE], [SMTOWN], [Stone Music]) is almost always a YouTube channel or distributor. NEVER use this as the artist.
2. IDENTIFY REAL ARTIST: Look for the name that follows the distributor tag.
   - Example: "[Jaeguchi] KiiiKiii - Song" -> Artist is "KiiiKiii", NOT "Jaeguchi".
   - Example: "[1theK] IU (아이유) _ LILAC" -> Artist is "IU", NOT "1theK".
3. CLEAN TITLE: Extract only the song title. Remove promotional noise like "(Color Coded Lyrics)", "Official MV", "Music Video", "1080p", etc.
4. VERSIONING: Keep essential info like "(Remix)", "(Acoustic)", or "(Feat. Artist)" in the title or artist field appropriately.
5. LANGUAGE: For "artist" and "title" fields, keep the original language (Korean stays Korean, English stays English). Do NOT romanize or translate.
6. SEARCH QUERY: Provide a "search_query" field ONLY for use with music APIs (Deezer, iTunes, lrclib). This should be in English/romanized for best API results. Use the internationally known English name if it exists, otherwise romanize.
   - Example: 버즈 - 나에게로 떠나는 여행 -> artist: "버즈", title: "나에게로 떠나는 여행", search_query: "Buzz Na Ege Ro Tteonaneun Yeohaeng"
   - Example: 자이언티 - 양화대교 -> artist: "자이언티", title: "양화대교", search_query: "Zion.T Yanghwa BRDG"
   - Example: IU (아이유) - LILAC -> artist: "IU", title: "LILAC", search_query: "IU LILAC"
   - Example: BTS - 봄날 -> artist: "BTS", title: "봄날", search_query: "BTS Spring Day"

JSON FORMAT: Return only {"results": [{"artist": "...", "title": "...", "search_query": "..."}, ...]}`;

    const aiLogContainer = document.getElementById('ai-log-container');
    const logWindow = document.getElementById('log-window');

    const logMessage = (msg, type = 'info') => {
        aiLogContainer.style.display = 'block';
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        const time = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        entry.innerHTML = `<span class="log-time">[${time}]</span> <span class="log-msg-${type}">${msg}</span>`;
        logWindow.prepend(entry);
    };

    // AI Magic Fill Logic (Bulk Processing)
    async function startBulkAIAnalysis() {
        if (uploadedFiles.length === 0) return;

        syncCurrentPageData();

        aiMagicBtn.disabled = true;
        aiMagicBtn.classList.add('ai-loading');
        const lang = localStorage.getItem('language') || 'ko';
        const t = translations[lang];
        const analyzingText = t.analyzing || "Analyzing...";
        aiMagicBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${analyzingText}`;
        logMessage(`Starting Bulk AI analysis for ${uploadedFiles.length} files...`, 'info');

        const CHUNK_SIZE = 10;
        for (let i = 0; i < uploadedFiles.length; i += CHUNK_SIZE) {
            const chunk = uploadedFiles.slice(i, i + CHUNK_SIZE);
            const fileNames = chunk.map(item => item.file.name);
            
            logMessage(`Processing batch: ${i + 1} to ${Math.min(i + CHUNK_SIZE, uploadedFiles.length)}`, 'info');
            
            try {
                const data = await callAIBulk(fileNames);
                const results = data.results;

                if (Array.isArray(results)) {
                    // 1. Update artist, title, and search_query properties
                    results.forEach((res, index) => {
                        const item = chunk[index];
                        if (item && res) {
                            item.artist = res.artist || "Unknown";
                            item.title = res.title || "Unknown";
                            if (res.search_query) item.searchQuery = res.search_query;
                        }
                    });
                    
                    // 2. Call renderTable immediately
                    renderTable();
                    
                    logMessage(`Batch successful: ${results.length} files processed. Metadata analysis done.`, 'success');

                    // 3. Pause for 1 second as requested
                    await new Promise(resolve => setTimeout(resolve, 1000));
                } else {
                    logMessage('Invalid response format from AI.', 'error');
                }
            } catch (err) {
                logMessage(`Error in batch: ${err.message}`, 'error');
                console.error(err);
            }
        }

        aiMagicBtn.disabled = false;
        aiMagicBtn.classList.remove('ai-loading');
        const finalLang = localStorage.getItem('language') || 'ko';
        const btnText = translations[finalLang].btn_ai_magic;
        aiMagicBtn.innerHTML = `<i class="fas fa-magic"></i> <span data-i18n="btn_ai_magic">${btnText}</span>`;
        logMessage('All batches complete.', 'success');
    }

    async function callAIBulk(fileNames) {
        const combinedValue = aiModelCombined.value;
        const [provider, model] = combinedValue.split(':');
        const apiKey = aiApiKey.value.trim();
        const systemPrompt = aiSystemPromptDefault;

        try {
            if (provider === 'openai') {
                const requestPayload = {
                    model: model,
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: `Filenames: ${JSON.stringify(fileNames)}` }
                    ],
                    response_format: { type: "json_object" }
                };
                logMessage(`[Request] OpenAI Bulk (${model}): ${JSON.stringify(requestPayload)}`, 'info');

                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify(requestPayload)
                });

                const data = await response.json();
                logMessage(`[Response] OpenAI Raw: ${JSON.stringify(data)}`, 'ai');

                if (!response.ok) {
                    throw new Error(data.error?.message || `OpenAI Error: ${response.status}`);
                }
                return JSON.parse(data.choices[0].message.content);

            } else if (provider === 'gemini') {
                const requestPayload = {
                    contents: [{
                        parts: [{ text: `${systemPrompt}\n\nFilenames: ${JSON.stringify(fileNames)}` }]
                    }],
                    generationConfig: { responseMimeType: "application/json" }
                };
                logMessage(`[Request] Gemini Bulk: ${JSON.stringify(requestPayload)}`, 'info');

                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(requestPayload)
                });

                const data = await response.json();
                logMessage(`[Response] Gemini Raw: ${JSON.stringify(data)}`, 'ai');

                if (!response.ok) {
                    throw new Error(data.error?.message || `Gemini Error: ${response.status}`);
                }
                if (!data.candidates || !data.candidates[0]) {
                    throw new Error('Gemini returned no results');
                }
                const text = data.candidates[0].content.parts[0].text;
                return JSON.parse(text);
            }
        } catch (err) {
            throw err;
        }
    }

    // --- Cost Modal Logic ---
    const costLink = document.getElementById('cost-link');
    const costModal = document.getElementById('cost-modal');
    const costModalClose = document.getElementById('cost-modal-close');

    costLink.onclick = () => costModal.style.display = 'flex';
    costModalClose.onclick = () => costModal.style.display = 'none';
    window.onclick = (event) => {
        if (event.target === costModal) {
            costModal.style.display = 'none';
        }
    };

    // --- Tagger Logic ---
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const fileList = document.getElementById('file-list');
    const fileTableContainer = document.getElementById('file-table-container');
    const startBtn = document.getElementById('start-btn');
    const statusMsg = document.getElementById('status-msg');

    let uploadedFiles = [];
    let currentPage = 1;
    const itemsPerPage = 10;

    function parseMP3Info(filename) {
        let name = filename.replace(/\.[^/.]+$/, ""); 
        name = name.replace(/\s*[([][A-Za-z0-9_-]{11}[)\]]/g, "");
        
        let prefix = "";
        let prefixMatch = name.match(/^\[(.*?)\]/);
        if (prefixMatch) {
            prefix = prefixMatch[1].trim();
            name = name.replace(/^\[.*?\]\s*/, "");
        }

        const noise = [
            /\(Official.*?\)/gi, /\(Music.*?\)/gi, /\(Lyric.*?\)/gi,
            /\(Video.*?\)/gi, /\[Official.*?\]/gi, /MV/gi, /Audio/gi,
            /\(Beatbox\)/gi, /가사/g, /Live/gi
        ];
        noise.forEach(re => name = name.replace(re, ""));

        let artist = "Unknown Artist";
        let title = name.trim();

        if (name.includes(" - ")) {
            const parts = name.split(" - ");
            artist = parts[0].trim();
            title = parts.slice(1).join(" - ").trim();
        } else if (prefix) {
            artist = prefix;
        }

        artist = artist.replace(/^[^(]+\((.*?)\)$/, "$1");
        return { artist, title };
    }

    function syncCurrentPageData() {
        const rows = fileList.querySelectorAll('tr:not(.lyrics-editor-row)');
        const start = (currentPage - 1) * itemsPerPage;
        
        rows.forEach((row, index) => {
            const itemIndex = start + index;
            if (uploadedFiles[itemIndex]) {
                const artist = row.querySelector('.artist-input').value;
                const title = row.querySelector('.title-input').value;
                const lyricsRow = row.nextElementSibling;
                const lyrics = lyricsRow.querySelector('.lyrics-textarea').value;
                
                uploadedFiles[itemIndex].artist = artist;
                uploadedFiles[itemIndex].title = title;
                uploadedFiles[itemIndex].lyrics = lyrics;
            }
        });
    }

    function renderTable() {
        fileList.innerHTML = '';
        const totalPages = Math.ceil(uploadedFiles.length / itemsPerPage) || 1;
        
        if (currentPage > totalPages) currentPage = totalPages;
        if (currentPage < 1) currentPage = 1;

        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageItems = uploadedFiles.slice(start, end);

        pageItems.forEach((item, index) => {
            createRow(item, start + index);
        });

        // Update UI
        document.getElementById('current-page-num').innerText = currentPage;
        document.getElementById('total-pages-num').innerText = totalPages;
        
        document.getElementById('prev-page').disabled = currentPage === 1;
        document.getElementById('next-page').disabled = currentPage === totalPages;
        
        if (uploadedFiles.length === 0) {
            fileTableContainer.style.display = 'none';
            startBtn.disabled = true;
        } else {
            fileTableContainer.style.display = 'block';
            startBtn.disabled = false;
        }
    }

    async function handleFiles(files) {
        const mp3Files = Array.from(files).filter(f => f.name.toLowerCase().endsWith('.mp3'));
        if (mp3Files.length === 0) return;

        logMessage(`Loading ${mp3Files.length} files...`, 'info');

        const promises = mp3Files.map(file => {
            return new Promise((resolve) => {
                jsmediatags.read(file, {
                    onSuccess: function(tag) {
                        const tags = tag.tags;
                        const fileNameInfo = parseMP3Info(file.name);
                        const artist = tags.artist || fileNameInfo.artist;
                        const title = tags.title || fileNameInfo.title;
                        const lyrics = tags.lyrics ? tags.lyrics.lyrics : "";
                        
                        let artBuffer = null;
                        if (tags.picture) {
                            artBuffer = new Uint8Array(tags.picture.data).buffer;
                        }

                        uploadedFiles.push({
                            file,
                            artist,
                            title,
                            lyrics,
                            artBuffer,
                            originalName: file.name
                        });
                        resolve();
                    },
                    onError: function(error) {
                        const info = parseMP3Info(file.name);
                        uploadedFiles.push({
                            file,
                            artist: info.artist,
                            title: info.title,
                            lyrics: "",
                            artBuffer: null,
                            originalName: file.name
                        });
                        resolve();
                    }
                });
            });
        });

        await Promise.all(promises);
        renderTable();
    }

    function createRow(item, globalIndex) {
        const row = document.createElement('tr');
        const initialNewName = `${item.artist} - ${item.title}.mp3`.replace(/[\\/:*?"<>|]/g, "");
        
        row.innerHTML = `
            <td>
                <div class="art-preview-container" title="앨범 아트 선택">
                    ${item.artBuffer ? '' : '<i class="fas fa-image"></i>'}
                </div>
                <button class="find-art-btn" style="margin-top: 5px; font-size: 0.7rem; width: 100%; padding: 2px;">Find</button>
                <input type="file" class="art-input" accept="image/*" style="display: none;">
            </td>
            <td title="${item.file.name}">${item.file.name.substring(0, 20)}${item.file.name.length > 20 ? '...' : ''}</td>
            <td><input type="text" class="artist-input" value="${item.artist}"></td>
            <td><input type="text" class="title-input" value="${item.title}"></td>
            <td><input type="text" class="search-query-input" value="${item.searchQuery || ''}" placeholder="AI 채우기 후 자동 생성" style="font-size: 0.75rem; color: var(--muted-foreground);"></td>
            <td style="text-align: center;">
                <button class="btn-lyrics ${item.lyrics ? 'active' : ''}" title="가사 편집">
                    <i class="fas fa-file-alt"></i>
                </button>
            </td>
            <td class="new-filename-cell">${initialNewName}</td>
            <td style="text-align: center;">
                <button class="btn-remove" title="제거">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </td>
        `;

        if (item.artBuffer) {
            const blob = new Blob([item.artBuffer]);
            const url = URL.createObjectURL(blob);
            row.querySelector('.art-preview-container').innerHTML = `<img src="${url}" alt="Preview">`;
        }

        // 가사 편집기용 별도 행 (숨겨짐)
        const lyricsRow = document.createElement('tr');
        lyricsRow.className = 'lyrics-editor-row';
        lyricsRow.style.display = 'none';
        lyricsRow.innerHTML = `
            <td colspan="8">
                <div class="lyrics-editor-container" style="display: block; padding: 1rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                        <span style="font-size: 0.85rem; font-weight: 600; color: var(--muted-foreground);">가사 편집</span>
                        <button class="btn-fetch-lyrics btn-secondary" style="padding: 0.3rem 0.75rem; font-size: 0.75rem;">
                            <i class="fas fa-search"></i> 가사 검색 (LRCLIB)
                        </button>
                    </div>
                    <textarea class="lyrics-textarea" placeholder="여기에 가사를 입력하거나 검색 버튼을 누르세요...">${item.lyrics}</textarea>
                </div>
            </td>
        `;

        const artContainer = row.querySelector('.art-preview-container');
        const findArtBtn = row.querySelector('.find-art-btn');
        const artInput = row.querySelector('.art-input');
        const artistInput = row.querySelector('.artist-input');
        const titleInput = row.querySelector('.title-input');
        const searchQueryInput = row.querySelector('.search-query-input');
        const lyricsBtn = row.querySelector('.btn-lyrics');
        const newNameCell = row.querySelector('.new-filename-cell');
        const removeBtn = row.querySelector('.btn-remove');
        const lyricsTextarea = lyricsRow.querySelector('.lyrics-textarea');
        const fetchLyricsBtn = lyricsRow.querySelector('.btn-fetch-lyrics');

        findArtBtn.onclick = () => {
            currentItemForArtSearch = item;
            artSearchInput.value = `${item.artist.trim()} - ${item.title.trim()}`;
            artSearchModal.style.display = 'flex';
        };

        // 가사 검색 함수 정의
        const performLyricsSearch = async (silent = false) => {
            if (!silent) {
                fetchLyricsBtn.disabled = true;
                fetchLyricsBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            }
            await fetchLyricsForItem(item, silent);
            if (!silent) {
                fetchLyricsBtn.disabled = false;
                fetchLyricsBtn.innerHTML = '<i class="fas fa-search"></i> 가사 검색 (LRCLIB)';
            }
        };

        fetchLyricsBtn.onclick = () => performLyricsSearch(false);

        const updateLyricsBtnState = () => {
            const val = lyricsTextarea.value.trim();
            lyricsBtn.classList.toggle('active', val.length > 0);
            item.lyrics = val;
        };

        lyricsTextarea.addEventListener('input', updateLyricsBtnState);

        lyricsBtn.onclick = () => {
            const isHidden = lyricsRow.style.display === 'none';
            lyricsRow.style.display = isHidden ? 'table-row' : 'none';
            updateLyricsBtnState();
        };

        removeBtn.onclick = () => {
            uploadedFiles.splice(globalIndex, 1);
            renderTable();
            logMessage(`Removed file at index ${globalIndex + 1}`, 'info');
        };

        artContainer.onclick = () => artInput.click();
        artInput.onchange = async (e) => {
            const imgFile = e.target.files[0];
            if (imgFile) {
                item.artBuffer = await imgFile.arrayBuffer();
                const reader = new FileReader();
                reader.onload = (event) => {
                    artContainer.innerHTML = `<img src="${event.target.result}" alt="Preview">`;
                };
                reader.readAsDataURL(imgFile);
            }
        };

        const updatePreview = () => {
            const art = artistInput.value.trim() || "Unknown Artist";
            const tit = titleInput.value.trim() || "Unknown Title";
            item.artist = art;
            item.title = tit;
            const newName = `${art} - ${tit}.mp3`.replace(/[\\/:*?"<>|]/g, "");
            newNameCell.innerText = newName;
        };

        artistInput.addEventListener('input', updatePreview);
        titleInput.addEventListener('input', updatePreview);
        searchQueryInput.addEventListener('input', () => {
            item.searchQuery = searchQueryInput.value.trim() || undefined;
        });

        // For AI Magic to trigger searches
        item.performLyricsSearch = performLyricsSearch;
        item.fetchLyrics = performLyricsSearch;
        item.updateRowUI = () => {
            artistInput.value = item.artist;
            titleInput.value = item.title;
            searchQueryInput.value = item.searchQuery || '';
            lyricsTextarea.value = item.lyrics;

            if (item.artBuffer) {
                const blob = new Blob([item.artBuffer]);
                const url = URL.createObjectURL(blob);
                artContainer.innerHTML = `<img src="${url}" alt="Preview">`;
            } else {
                artContainer.innerHTML = '<i class="fas fa-image"></i>';
            }

            updatePreview();
            updateLyricsBtnState();
        };

        fileList.appendChild(row);
        fileList.appendChild(lyricsRow);
    }

    document.getElementById('prev-page').onclick = () => {
        syncCurrentPageData();
        if (currentPage > 1) {
            currentPage--;
            renderTable();
            logMessage(`Switched to page ${currentPage}`, 'info');
        }
    };

    document.getElementById('next-page').onclick = () => {
        syncCurrentPageData();
        const totalPages = Math.ceil(uploadedFiles.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderTable();
            logMessage(`Switched to page ${currentPage}`, 'info');
        }
    };

    dropZone.onclick = () => fileInput.click();
    fileInput.onchange = (e) => handleFiles(e.target.files);
    
    // Drag and drop feedback
    dropZone.ondragover = (e) => { 
        e.preventDefault(); 
        dropZone.style.borderColor = 'var(--primary)';
        dropZone.style.backgroundColor = 'var(--accent)';
    };
    dropZone.ondragleave = () => { 
        dropZone.style.borderColor = 'var(--border)';
        dropZone.style.backgroundColor = 'var(--background)';
    };
    dropZone.ondrop = (e) => { 
        e.preventDefault(); 
        dropZone.style.borderColor = 'var(--border)';
        dropZone.style.backgroundColor = 'var(--background)';
        handleFiles(e.dataTransfer.files); 
    };

    function getMimeType(buffer) {
        if (!buffer || buffer.byteLength < 4) return 'image/jpeg';
        const bytes = new Uint8Array(buffer);
        // JPEG: FF D8 FF
        if (bytes[0] === 0xFF && bytes[1] === 0xD8 && bytes[2] === 0xFF) {
            return 'image/jpeg';
        }
        // PNG: 89 50 4E 47
        if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4E && bytes[3] === 0x47) {
            return 'image/png';
        }
        return 'image/jpeg';
    }

    startBtn.onclick = async () => {
        syncCurrentPageData();

        startBtn.disabled = true;
        statusMsg.style.display = 'block';
        statusMsg.className = "status info";
        
        const lang = localStorage.getItem('language') || 'ko';
        const t = translations[lang];

        const zip = new JSZip();
        let successCount = 0;
        let failCount = 0;

        for (let i = 0; i < uploadedFiles.length; i++) {
            const item = uploadedFiles[i];
            const originalName = item.originalName;
            statusMsg.innerText = (t.status_processing || "Processing files...") + ` (${i + 1}/${uploadedFiles.length})...`;
            
            try {
                const artist = item.artist || "Unknown Artist";
                const title = item.title || "Unknown Title";
                const arrayBuffer = await item.file.arrayBuffer();

                const writer = new ID3Writer(arrayBuffer);
                writer.setFrame('TPE1', [artist])
                      .setFrame('TIT2', title);
                
                if (item.artBuffer) {
                    const detectedMimeType = getMimeType(item.artBuffer);
                    writer.setFrame('APIC', {
                        type: 3,
                        data: item.artBuffer,
                        description: 'Cover',
                        mimeType: detectedMimeType
                    });
                }

                if (item.lyrics) {
                    writer.setFrame('USLT', {
                        description: '',
                        lyrics: item.lyrics,
                        language: 'kor'
                    });
                }
                
                writer.addTag();

                const taggedBlob = writer.getBlob();
                const fileNameBase = `${artist} - ${title}`.replace(/[\\/:*?"<>|]/g, ""); 
                let finalName = `${fileNameBase}.mp3`;
                
                let counter = 1;
                while (zip.file(finalName)) {
                    finalName = `${fileNameBase} (${counter}).mp3`;
                    counter++;
                }
                
                zip.file(finalName, taggedBlob);
                successCount++;
            } catch (err) {
                failCount++;
                logMessage(`Failed to process ${originalName}: ${err.message}`, 'error');
                console.error(`Error processing ${originalName}:`, err);
            }
        }

        if (successCount > 0) {
            statusMsg.innerText = t.status_generating_zip || "Generating ZIP archive...";
            try {
                const content = await zip.generateAsync({ type: "blob" });
                const url = URL.createObjectURL(content);
                
                const link = document.createElement('a');
                link.href = url;
                link.download = "organized_mp3s.zip";
                link.click();

                // Clean up memory
                setTimeout(() => URL.revokeObjectURL(url), 100);

                statusMsg.className = "status success";
                const doneMsg = (t.status_done || "Done! {success} files processed successfully{fail}")
                    .replace('{success}', successCount)
                    .replace('{fail}', failCount > 0 ? `, ${failCount} failed` : '');
                statusMsg.innerText = doneMsg;
                logMessage(`Successfully processed ${successCount} files and generated ZIP.`, 'success');
            } catch (err) {
                statusMsg.className = "status error";
                statusMsg.innerText = (t.status_fail_zip || "Failed to generate ZIP: ") + err.message;
                logMessage(`ZIP generation failed: ${err.message}`, 'error');
            }
        } else {
            statusMsg.className = "status error";
            statusMsg.innerText = t.status_no_files || "No files were successfully processed.";
        }
        
        startBtn.disabled = false;
    };
});

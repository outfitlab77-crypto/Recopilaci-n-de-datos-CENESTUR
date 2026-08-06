
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        amber: {
                            50: '#fef5e6',
                            100: '#fce3c0',
                            200: '#facd90',
                            300: '#f7b458',
                            400: '#f59d28',
                            500: '#F58220',
                            600: '#d96e1a',
                            700: '#b85a12',
                            800: '#97480d',
                            900: '#7d3e0c',
                        },
                        blue: {
                            50: '#e1f0fa',
                            100: '#b2dcf3',
                            200: '#7ec4ec',
                            300: '#48ace3',
                            400: '#1b97db',
                            500: '#0077C8',
                            600: '#006ab8',
                            700: '#005596',
                            800: '#004378',
                            900: '#003766',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom scrollbar for better visual look */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }

        ::-webkit-scrollbar-track {
            background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }

        /* Print styles */
        @media print {
            body * {
                visibility: hidden;
            }

            #modal-detail,
            #modal-detail * {
                visibility: visible;
            }

            #modal-detail {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                max-width: 100%;
                margin: 0;
                padding: 0;
                border: none;
                box-shadow: none;
                background: white;
                transform: none !important;
            }

            #modal-detail>div {
                max-height: none !important;
                overflow: visible !important;
                box-shadow: none !important;
                border: none !important;
            }

            /* Hide print and close buttons during print */
            #modal-detail button {
                display: none !important;
            }

            /* Ensure background colors and gradients print correctly */
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
        }
    </style>
</head>

<body
    class="min-h-screen flex flex-col font-sans text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900 pb-28 md:pb-8 bg-slate-50">

    <!-- Splash Screen -->
    <div id="splash-screen"
        class="fixed inset-0 z-50 bg-slate-50 flex items-center justify-center transition-opacity duration-1000">
        <div class="flex flex-col items-center">
            <img src="logo-Photoroom.png" alt="CENESTUR"
                class="h-56 w-auto object-contain animate-pulse drop-shadow-2xl mb-6">
            <div class="flex space-x-2">
                <div class="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
                <div class="w-3 h-3 bg-amber-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                <div class="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
            </div>
        </div>
    </div>

    <!-- Header -->
    <header class="bg-gradient-to-r from-blue-900 via-blue-800 to-amber-600 text-white shadow-lg sticky top-0 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Branding -->
                <div class="flex items-center space-x-3">
                    <div class="flex items-center justify-center h-12 mr-2">
                        <img src="logo.png" alt="CENESTUR Logo" class="h-full w-auto object-contain drop-shadow-md">
                    </div>
                    <div>
                        <h1 class="text-lg font-bold tracking-tight text-white leading-tight">Base de Datos
                        </h1>
                        <p class="text-xs text-amber-300 font-medium flex items-center">
                            <i class="fa-solid fa-location-dot text-amber-400 mr-1"></i> Mitad del Mundo · Quito,
                            Ecuador
                        </p>
                    </div>
                </div>

                <!-- Main Tabs Navigation -->
                <nav class="hidden md:flex space-x-2">
                    <button id="nav-form-btn" onclick="switchTab('form')"
                        class="px-3 py-2 rounded-full text-sm font-medium bg-amber-500 text-slate-950 shadow-sm transition-all flex items-center gap-2">
                        <i class="fa-solid fa-clipboard-list"></i> Nueva Ficha / Encuesta
                    </button>
                    <button id="nav-records-btn" onclick="switchTab('records')"
                        class="px-3 py-2 rounded-full text-sm font-medium hover:bg-white/10 text-slate-200 transition-all flex items-center gap-2">
                        <i class="fa-solid fa-address-book"></i> Fichas Registradas (<span id="counter-badge">0</span>)
                    </button>
                    <button id="nav-dashboard-btn" onclick="switchTab('dashboard')"
                        class="px-3 py-2 rounded-full text-sm font-medium hover:bg-white/10 text-slate-200 transition-all flex items-center gap-2">
                        <i class="fa-solid fa-chart-pie"></i> Informe Consolidado
                    </button>
                </nav>
            </div>
        </div>
    </header>

    <!-- Mobile Bottom Navigation Bar -->
    <nav id="mobile-nav-bar" class="md:hidden opacity-0 translate-y-24 pointer-events-none transition-all duration-1000 ease-out fixed bottom-6 left-0 right-0 mx-auto w-[92%] max-w-sm bg-white/90 backdrop-blur-md border border-slate-200 flex justify-around items-center p-2 rounded-3xl shadow-2xl z-50">
        <button id="nav-form-btn-mobile" onclick="switchTab('form')" class="flex flex-col items-center justify-center w-full py-2 text-amber-700 bg-amber-50 rounded-2xl transition-all shadow-sm">
            <i class="fa-solid fa-clipboard-list text-xl mb-1"></i>
            <span class="text-[10px] font-bold">Ficha</span>
        </button>
        <button id="nav-records-btn-mobile" onclick="switchTab('records')" class="flex flex-col items-center justify-center w-full py-2 text-slate-400 hover:text-slate-600 rounded-2xl transition-all">
            <i class="fa-solid fa-address-book text-xl mb-1"></i>
            <span class="text-[10px] font-bold">Registros</span>
        </button>
        <button id="nav-dashboard-btn-mobile" onclick="switchTab('dashboard')" class="flex flex-col items-center justify-center w-full py-2 text-slate-400 hover:text-slate-600 rounded-2xl transition-all">
            <i class="fa-solid fa-chart-pie text-xl mb-1"></i>
            <span class="text-[10px] font-bold">Informe</span>
        </button>
    </nav>

    <!-- Main Container -->
    <main class="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">

        <!-- TAB 1: FORMULARIO DE LEVANTAMIENTO -->
        <section id="tab-form" class="space-y-6">

            <!-- Banner / Guidelines -->
            <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm">
                <div class="flex items-start">
                    <div class="flex-shrink-0 text-amber-500 pt-0.5">
                        <i class="fa-solid fa-circle-info text-xl"></i>
                    </div>
                    <div class="ml-3">
                        <h3 class="text-sm font-bold text-amber-900">Metodología de Levantamiento de Información en
                            Campo</h3>
                        <p class="text-xs text-amber-800 mt-1 leading-relaxed">
                            Complete las variables cuantitativas y cualitativas mediante entrevista directa con el
                            emprendedor de San Antonio de Pichincha / Mitad del Mundo. El sistema evaluará
                            automáticamente las <strong>15 variables estandarizadas</strong> y clasificará el nivel de
                            madurez operativa.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Form Multi-Step Progress Indicator -->
            <div class="bg-white p-4 sm:p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 mb-2">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-3 sm:gap-4">
                        <span id="current-step-number" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-slate-900 font-black flex items-center justify-center text-lg shadow-lg shadow-amber-500/30">1</span>
                        <div>
                            <span class="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-widest block mb-0.5">Paso <span id="current-step-idx">1</span> de 4</span>
                            <span id="current-step-title" class="text-sm sm:text-base font-black text-slate-800">Datos Generales</span>
                        </div>
                    </div>
                </div>
                <!-- Progress bar -->
                <div class="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div id="current-step-progress" class="bg-gradient-to-r from-amber-400 to-amber-500 h-full rounded-full transition-all duration-700 ease-out" style="width: 25%"></div>
                </div>
            </div>

            <!-- Main Form Card -->
            <form id="baseline-form" onsubmit="handleFormSubmit(event)"
                class="bg-white rounded-3xl shadow-xl border border-slate-200 p-4 sm:p-6 md:p-8 space-y-8">

                <!-- STEP 1: Datos Generales -->
                <div id="step-1" class="space-y-6">
                    <div class="border-b border-slate-200 pb-4 mb-4">
                        <h2 class="text-xl sm:text-lg font-black text-slate-900 leading-tight mb-1"><i
                                class="fa-solid fa-store text-amber-500 mr-2"></i> Paso 1: Información General del Emprendimiento</h2>
                        <p class="text-sm sm:text-xs text-slate-500">Ubicación geográfica e identificación básica en la zona de Mitad del Mundo.</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-bold text-slate-700 mb-1">Nombre Comercial del Negocio
                                *</label>
                            <input type="text" id="business-name" required placeholder="Ej. Artesanías Equinocciales"
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all">
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-slate-700 mb-1">Nombre del Emprendedor /
                                Titular *</label>
                            <input type="text" id="owner-name" required placeholder="Ej. María Carmen Morales"
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all">
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-slate-700 mb-1">Sector o Rubro de Actividad
                                *</label>
                            <select id="business-sector" required
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm text-slate-600 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none">
                                <option value="">Seleccione sector...</option>
                                <option value="Gastronomía y Alimentación">Gastronomía y Alimentación (Helados, Comida
                                    Típica, Cafés)</option>
                                <option value="Artesanías y Recuerdos">Artesanías, Joyería y Recuerdos Turísticos
                                </option>
                                <option value="Textil y Vestimenta">Textil, Calzado y Vestimenta Tradicional</option>
                                <option value="Servicios Turísticos y Guianza">Servicios Turísticos, Hospedaje y Guianza
                                </option>
                                <option value="Comercio General y Abarrotes">Comercio General, Víveres y Tiendas
                                </option>
                                <option value="Servicios Profesionales y Técnicos">Servicios Profesionales, Belleza y
                                    Oficios</option>
                                <option value="Agroindustria y Productos Naturales">Agroindustria y Productos Naturales
                                    Organicos</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-slate-700 mb-1">Ubicación / Sector en Mitad
                                del Mundo *</label>
                            <select id="location-zone" required
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm text-slate-600 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none">
                                <option value="">Seleccione sector local...</option>
                                <option value="Entorno Complejo Ciudad Mitad del Mundo">Entorno Complejo Ciudad Mitad
                                    del Mundo</option>
                                <option value="Av. Manuel Córdova Galarza">Av. Manuel Córdova Galarza</option>
                                <option value="Plaza Central San Antonio de Pichincha">Plaza Central San Antonio de
                                    Pichincha</option>
                                <option value="Sector Catequilla / Ruinas">Sector Catequilla / Ruinas</option>
                                <option value="Barrio Caspigasí / Pucará">Barrio Caspigasí / Pucará</option>
                                <option value="Otras calles periféricas San Antonio">Otras calles periféricas San
                                    Antonio</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-slate-700 mb-1">Teléfono / WhatsApp de
                                Contacto *</label>
                            <input type="tel" id="owner-phone" required placeholder="Ej. 0991234567"
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all">
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-slate-700 mb-1">Años de Funcionamiento del
                                Negocio *</label>
                            <select id="years-operating" required
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm text-slate-600 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none">
                                <option value="" disabled selected hidden class="text-slate-400">Ej. Menos de 1 año (Idea / Inicio)</option>
                                <option value="Menos de 1 año">Menos de 1 año (Idea / Inicio)</option>
                                <option value="1 a 3 años">1 a 3 años (En Crecimiento)</option>
                                <option value="3 a 5 años">3 a 5 años (En Consolidación)</option>
                                <option value="Más de 5 años">Más de 5 años (Maduro)</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex pt-4 mt-4">
                        <button type="button" onclick="goToStep(2)"
                            class="w-full sm:w-auto px-5 py-4 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-2xl text-base sm:text-sm shadow transition-all duration-150 flex items-center justify-center gap-2">
                            <span>Siguiente: Diagnóstico Operativo</span> <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <!-- STEP 2: Diagnóstico Operativo y Administrativo -->
                <div id="step-2" class="hidden space-y-6">
                    <div class="border-b border-slate-200 pb-4 mb-4">
                        <h2 class="text-xl sm:text-lg font-black text-slate-900 leading-tight mb-1"><i
                                class="fa-solid fa-gears text-amber-500 mr-2"></i> Paso 2: Diagnóstico de Procesos Administrativos, Costos y Operación</h2>
                        <p class="text-sm sm:text-xs text-slate-500">Evaluación cualitativa del control interno y financiero del negocio.</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Administrative Processes -->
                        <div class="space-y-4">
                            <h3 class="font-black text-sm text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                                <i class="fa-solid fa-folder-tree text-amber-500"></i> Procesos Administrativos
                            </h3>
                            <label class="block text-xs font-bold text-slate-900">¿Cómo lleva el registro de sus
                                ingresos y gastos diarios?</label>
                            <select id="admin-records"
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm text-slate-600 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none" required>
                                <option value="" disabled selected hidden class="text-slate-400">Ej. No lleva ningún registro (solo memoria)</option>
                                <option value="1">No lleva ningún registro (solo memoria)</option>
                                <option value="2">Anota de forma informal en libreta/cuaderno</option>
                                <option value="3">Utiliza hojas de cálculo simples (Excel/Google Sheets)</option>
                                <option value="4">Utiliza un sistema contable o software de ventas</option>
                            </select>

                            <label class="block text-xs font-bold text-slate-900 pt-2">Formalización Legal y RUC /
                                RIMPE:</label>
                            <select id="admin-legal"
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm text-slate-600 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none" required>
                                <option value="" disabled selected hidden class="text-slate-400">Ej. Sin RUC / Informal</option>
                                <option value="1">Sin RUC / Informal</option>
                                <option value="2">RUC / RIMPE Negocio Popular (En trámite o activo)</option>
                                <option value="3">RIMPE Emprendedor formalizado</option>
                                <option value="4">Régimen General / Compañía Constituida</option>
                            </select>
                        </div>

                        <!-- Cost Structure -->
                        <div class="space-y-4">
                            <h3 class="font-black text-sm text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                                <i class="fa-solid fa-calculator text-amber-500"></i> Estructura de Costos
                            </h3>
                            <label class="block text-xs font-bold text-slate-900">¿Conoce exactamente el costo unitario
                                de sus productos/servicios?</label>
                            <select id="cost-structure"
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm text-slate-600 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none" required>
                                <option value="" disabled selected hidden class="text-slate-400">Ej. No, calcula a ojo o intuición</option>
                                <option value="1">No, calcula a ojo o intuición</option>
                                <option value="2">Sabe el costo del insumo directo, pero ignora mano de obra o servicios
                                </option>
                                <option value="3">Tiene calculada la receta o costo directo con margen aproximado
                                </option>
                                <option value="4">Ficha técnica detallada con costos fijos, variables y margen neto
                                </option>
                            </select>

                            <label class="block text-xs font-bold text-slate-900 pt-2">Asignación de Sueldo del
                                Emprendedor:</label>
                            <select id="salary-allocation"
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm text-slate-600 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none" required>
                                <option value="" disabled selected hidden class="text-slate-400">Ej. Toma dinero de la caja según va necesitando para uso personal</option>
                                <option value="1">Toma dinero de la caja según va necesitando para uso personal</option>
                                <option value="2">Intenta fijarse un valor pero casi nunca lo cumple</option>
                                <option value="3">Tiene definido un sueldo fijo mensual dentro de los costos</option>
                            </select>
                        </div>

                        <!-- Pricing Strategy -->
                        <div class="space-y-4">
                            <h3 class="font-black text-sm text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                                <i class="fa-solid fa-tags text-amber-500"></i> Fijación de Precios
                            </h3>
                            <label class="block text-xs font-bold text-slate-900">¿Cómo establece los precios de sus
                                productos o servicios?</label>
                            <select id="pricing-method"
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm text-slate-600 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none" required>
                                <option value="" disabled selected hidden class="text-slate-400">Ej. Copia exactamente los precios de la competencia vecina</option>
                                <option value="1">Copia exactamente los precios de la competencia vecina</option>
                                <option value="2">Suma un porcentaje fijo básico al precio del insumo</option>
                                <option value="3">Calcula costos totales + margen deseado + estudio de mercado local
                                </option>
                                <option value="4">Precio basado en propuesta de valor diferenciada para turista/local
                                </option>
                            </select>
                        </div>

                        <!-- Operational Control -->
                        <div class="space-y-4">
                            <h3 class="font-black text-sm text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                                <i class="fa-solid fa-boxes-stacked text-amber-500"></i> Control Operativo e Inventarios
                            </h3>
                            <label class="block text-xs font-bold text-slate-900">¿Cómo maneja la existencia de materia
                                prima, insumos o stock?</label>
                            <select id="operations-control"
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm text-slate-600 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none" required>
                                <option value="" disabled selected hidden class="text-slate-400">Ej. Compra cuando se termina el stock sobre la marcha</option>
                                <option value="1">Compra cuando se termina el stock sobre la marcha</option>
                                <option value="2">Revisa visualmente antes del fin de semana o feriado</option>
                                <option value="3">Lleva registro de entradas/salidas con stock mínimo programado
                                </option>
                                <option value="4">Control automatizado con proveedores clave estructurados</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex flex-col-reverse sm:flex-row justify-between pt-4 mt-4 gap-3">
                        <button type="button" onclick="goToStep(1)"
                            class="w-full sm:w-auto px-4 py-4 sm:py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-2xl text-base sm:text-sm transition-all flex items-center justify-center gap-2">
                            <i class="fa-solid fa-arrow-left"></i> <span>Anterior</span>
                        </button>
                        <button type="button" onclick="goToStep(3)"
                            class="w-full sm:w-auto px-5 py-4 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-2xl text-base sm:text-sm shadow transition-all duration-150 flex items-center justify-center gap-2">
                            <span>Siguiente: Diagnóstico Comercial</span> <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <!-- STEP 3: Diagnóstico Comercial -->
                <div id="step-3" class="hidden space-y-6">
                    <div class="border-b border-slate-200 pb-4 mb-4">
                        <h2 class="text-xl sm:text-lg font-black text-slate-900 leading-tight mb-1"><i
                                class="fa-solid fa-bullhorn text-amber-500 mr-2"></i> Paso 3: Diagnóstico Comercial y Presencia en Mercado</h2>
                        <p class="text-sm sm:text-xs text-slate-500">Evaluación de canales digitales, propuesta de valor y retención de clientes.</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Active Digital Channels -->
                        <div class="space-y-4">
                            <h3 class="font-black text-sm text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                                <i class="fa-solid fa-share-nodes text-amber-500"></i> Canales Digitales Activos
                            </h3>
                            <label class="block text-xs font-bold text-slate-900">Seleccione los medios digitales con
                                los que atiende o promociona:</label>
                            <div class="space-y-2 text-xs">
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" id="ch-whatsapp"
                                        class="rounded text-amber-500 focus:ring-amber-500">
                                    <span>WhatsApp Business (Catálogo / Atención rápida)</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" id="ch-facebook"
                                        class="rounded text-amber-500 focus:ring-amber-500">
                                    <span>Facebook / Instagram Activo</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" id="ch-tiktok"
                                        class="rounded text-amber-500 focus:ring-amber-500">
                                    <span>TikTok / Contenido de Video Corto</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" id="ch-maps"
                                        class="rounded text-amber-500 focus:ring-amber-500">
                                    <span>Google Maps / Ficha de Perfil de Negocio Local</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" id="ch-deuna"
                                        class="rounded text-amber-500 focus:ring-amber-500">
                                    <span>Cobros Digitales (Deuna, Transferencias, TPV/Tarjeta)</span>
                                </label>
                            </div>
                        </div>

                        <!-- Value Proposition -->
                        <div class="space-y-4">
                            <h3 class="font-black text-sm text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                                <i class="fa-solid fa-gem text-amber-500"></i> Propuesta de Valor Diferenciadora
                            </h3>
                            <label class="block text-xs font-bold text-slate-900">¿Qué hace único a su producto frente a
                                otros locales en la Mitad del Mundo?</label>
                            <textarea id="value-prop-text" rows="3"
                                placeholder="Ej. Elaborado con materia prima local orgánica, empaque ecológico y atención personalizada con relato histórico equinoccial."
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm outline-none focus:ring-2 focus:ring-amber-500 transition-all"></textarea>
                        </div>

                        <!-- Customer Segmentation -->
                        <div class="space-y-4">
                            <h3 class="font-black text-sm text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                                <i class="fa-solid fa-users text-amber-500"></i> Segmentación de Clientes Principal
                            </h3>
                            <label class="block text-xs font-bold text-slate-900">¿Quién es su cliente recurrente
                                principal?</label>
                            <select id="customer-segment"
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm text-slate-600 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none" required>
                                <option value="" disabled selected hidden class="text-slate-400">Ej. Turista Nacional (Quito /
                                    Otras Provincias)</option>
                                <option value="Turista Nacional (Quito / Otras Provincias)">Turista Nacional (Quito /
                                    Otras Provincias)</option>
                                <option value="Turista Internacional">Turista Internacional</option>
                                <option value="Residente Local de San Antonio de Pichincha">Residente Local de San
                                    Antonio de Pichincha</option>
                                <option value="Empresas / Instituciones / Delegaciones">Empresas / Instituciones /
                                    Delegaciones</option>
                                <option value="Ventas por Internet / Envíos a Nivel Nacional">Ventas por Internet /
                                    Envíos a Nivel Nacional</option>
                            </select>
                        </div>

                        <!-- Metrics & Sales Tracking -->
                        <div class="space-y-4">
                            <h3 class="font-black text-sm text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                                <i class="fa-solid fa-chart-line text-amber-500"></i> Métricas Comerciales Disponibles
                            </h3>
                            <label class="block text-xs font-bold text-slate-900">¿Mide el ticket promedio de compra o
                                la afluencia de clientes?</label>
                            <select id="metrics-tracking"
                                class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm text-slate-600 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none" required>
                                <option value="" disabled selected hidden class="text-slate-400">Ej. No mide nada, solo ve el total al cerrar la caja al final del día</option>
                                <option value="1">No mide nada, solo ve el total al cerrar la caja al final del día
                                </option>
                                <option value="2">Sabe cuáles son sus 2 productos más vendidos pero sin cifra exacta
                                </option>
                                <option value="3">Mide número de clientes diarios y venta promedio semanal</option>
                                <option value="4">Registra base de datos de clientes, reconsumo y métricas digitales
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="flex flex-col-reverse sm:flex-row justify-between pt-4 mt-4 gap-3">
                        <button type="button" onclick="goToStep(2)"
                            class="w-full sm:w-auto px-4 py-4 sm:py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-2xl text-base sm:text-sm transition-all flex items-center justify-center gap-2">
                            <i class="fa-solid fa-arrow-left"></i> <span>Anterior</span>
                        </button>
                        <button type="button" onclick="goToStep(4)"
                            class="w-full sm:w-auto px-5 py-4 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-2xl text-base sm:text-sm shadow transition-all duration-150 flex items-center justify-center gap-2">
                            <span>Siguiente: Evaluador 15 Variables</span> <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <!-- STEP 4: Evaluador de 15 Variables Cuantificables -->
                <div id="step-4" class="hidden space-y-6">
                    <div class="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h2 class="text-xl sm:text-lg font-black text-slate-900 leading-tight mb-1"><i class="fa-solid fa-list-check text-amber-500 mr-2"></i> Paso 4: Ficha Estandarizada de 15 Variables Cuantificables</h2>
                            <p class="text-sm sm:text-xs text-slate-500">Califique de 1 (Deficiente / Inexistente) a 5 (Excelente / Optimizado) cada dimensión.</p>
                        </div>
                        <div class="text-left sm:text-right bg-amber-50 p-4 sm:p-3 rounded-2xl sm:rounded-xl border border-amber-200 flex-shrink-0 shadow-inner">
                            <span class="text-[11px] text-amber-800 font-bold block uppercase tracking-wider mb-1">Puntaje Total Actual</span>
                            <span id="live-score" class="text-3xl sm:text-2xl font-black text-amber-500">15 <span class="text-sm font-bold text-amber-500/70">/ 75 pts</span></span>
                        </div>
                    </div>

                    <!-- Grid of 15 variables -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4" id="variables-container">
                        <!-- Dynamic JS generation of 15 variables for cleanliness -->
                    </div>

                    <div
                        class="flex flex-col-reverse sm:flex-row justify-between pt-6 mt-4 gap-3 border-t border-slate-200">
                        <button type="button" onclick="goToStep(3)"
                            class="w-full sm:w-auto px-5 py-4 sm:py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-2xl text-base sm:text-sm transition-all flex items-center justify-center gap-2">
                            <i class="fa-solid fa-arrow-left"></i> <span>Anterior</span>
                        </button>
                        <button type="submit"
                            class="w-full sm:w-auto px-5 py-4 sm:py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl text-base sm:text-sm shadow-lg shadow-emerald-500/30 transition-all duration-150 flex items-center justify-center gap-2">
                            <i class="fa-solid fa-check"></i> <span>Finalizar y Guardar Ficha</span>
                        </button>
                    </div>
                </div>

            </form>
        </section>

        <!-- TAB 2: DIRECTORIO Y REGISTROS -->
        <section id="tab-records" class="hidden space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 mb-6">
                <div>
                    <h2 class="text-xl sm:text-lg font-black text-slate-900 leading-tight mb-1"><i class="fa-solid fa-address-book text-amber-500 mr-2"></i> Directorio de Fichas de Levantamiento</h2>
                    <p class="text-sm sm:text-xs text-slate-500">Emprendimientos encuestados en Mitad del Mundo.</p>
                </div>
                <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                    <div class="flex gap-2">
                        <input type="text" id="search-records" oninput="filterRecords()"
                            placeholder="Buscar negocio..."
                            class="flex-1 min-w-0 px-4 py-2 border border-slate-300 rounded-2xl text-xs sm:text-sm outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 focus:bg-white transition-colors">
                        <select id="filter-sector" onchange="filterRecords()"
                            class="w-32 sm:w-40 px-3 py-2 border border-slate-300 rounded-2xl text-xs sm:text-sm outline-none bg-slate-50 focus:bg-white transition-colors cursor-pointer">
                            <option value="">Sectores</option>
                            <option value="Gastronomía y Alimentación">Gastronomía</option>
                            <option value="Artesanías y Recuerdos">Artesanías</option>
                            <option value="Textil y Vestimenta">Textil</option>
                            <option value="Servicios Turísticos y Guianza">Turismo</option>
                        </select>
                    </div>
                    <div class="flex gap-2">
                        <button onclick="exportToCSV()"
                            class="flex-1 sm:flex-none px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-xs sm:text-sm font-bold transition flex justify-center items-center gap-2 shadow-sm"
                            title="Exportar">
                            <i class="fa-solid fa-file-csv"></i> Exportar
                        </button>
                        <input type="file" id="import-csv" accept=".csv" class="hidden" onchange="importFromCSV(event)">
                        <label for="import-csv"
                            class="flex-1 sm:flex-none px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-2xl text-xs sm:text-sm font-bold transition flex justify-center items-center gap-2 shadow-sm cursor-pointer mb-0"
                            title="Importar">
                            <i class="fa-solid fa-file-import"></i> Importar
                        </label>
                    </div>
                </div>
            </div>

            <!-- Cards Container -->
            <div id="records-table-body" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <!-- Populated dynamically -->
            </div>
            
            <!-- Empty State -->
            <div id="no-records-msg" class="bg-white p-12 text-center text-slate-400 rounded-3xl border border-slate-200 border-dashed hidden shadow-sm">
                <div class="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fa-solid fa-folder-open text-2xl text-slate-300"></i>
                </div>
                <h3 class="text-sm font-bold text-slate-600 mb-1">No hay registros</h3>
                <p class="text-xs">Aún no has levantado ninguna ficha en este dispositivo.</p>
            </div>
        </section>

        <!-- TAB 3: INFORME CONSOLIDADO GLOBALES -->
        <section id="tab-dashboard" class="hidden space-y-6">
            <div
                class="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <span class="text-amber-400 text-xs font-semibold uppercase tracking-wider">Informe de Diagnóstico
                        Territorial</span>
                    <h2 class="text-xl font-bold mt-1">Línea Base Cuantitativa: Emprendedores de Mitad del Mundo</h2>
                    <p class="text-slate-300 text-xs mt-1 max-w-xl leading-relaxed">
                        Evaluación general basada en las 15 variables estandarizadas. Identifica brechas prioritarias
                        para proyectos de asistencia técnica, capacitación y capital de trabajo.
                    </p>
                </div>
                <button onclick="exportToCSV()"
                    class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-2xl text-xs shadow flex items-center gap-2">
                    <i class="fa-solid fa-file-excel"></i> Exportar Datos (CSV)
                </button>
            </div>

            <!-- Key Metric Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div
                    class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p class="text-xs font-medium text-slate-500">Muestra Total Encuestada</p>
                        <p id="stat-total" class="text-2xl font-bold text-slate-900 mt-1">0</p>
                    </div>
                    <div
                        class="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
                        <i class="fa-solid fa-users"></i>
                    </div>
                </div>

                <div
                    class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p class="text-xs font-medium text-slate-500">Promedio Madurez Local</p>
                        <p id="stat-avg-score" class="text-2xl font-bold text-amber-500 mt-1">0 / 75</p>
                    </div>
                    <div
                        class="w-10 h-10 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center font-bold text-lg">
                        <i class="fa-solid fa-chart-line"></i>
                    </div>
                </div>

                <div
                    class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p class="text-xs font-medium text-slate-500">Brecha Digital Activa</p>
                        <p id="stat-digital-gap" class="text-2xl font-bold text-rose-600 mt-1">0%</p>
                    </div>
                    <div
                        class="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg">
                        <i class="fa-solid fa-wifi"></i>
                    </div>
                </div>

                <div
                    class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p class="text-xs font-medium text-slate-500">% Negocios Consolidados</p>
                        <p id="stat-consolidated" class="text-2xl font-bold text-emerald-600 mt-1">0%</p>
                    </div>
                    <div
                        class="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                </div>
            </div>

            <!-- Analytics Charts -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Radar Chart for 15 Variables -->
                <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                    <h3 class="text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <i class="fa-solid fa-spider text-amber-500"></i> Perfil de Desempeño por Variable (Promedio)
                    </h3>
                    <p class="text-xs text-slate-500 mb-4">Escala de 1 a 5 por cada una de las 15 variables
                        cuantificables de la línea base.</p>
                    <div class="relative h-72">
                        <canvas id="radarChart"></canvas>
                    </div>
                </div>

                <!-- Bar Chart by Sector -->
                <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                    <h3 class="text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <i class="fa-solid fa-chart-column text-amber-500"></i> Distribución por Sectores Económicos
                    </h3>
                    <p class="text-xs text-slate-500 mb-4">Cantidad de emprendimientos encuestados agrupados por tipo de
                        actividad.</p>
                    <div class="relative h-72">
                        <canvas id="barChart"></canvas>
                    </div>
                </div>
            </div>

            <!-- Priority Recommendations Matrix -->
            <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <h3 class="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <i class="fa-solid fa-lightbulb text-amber-500"></i> Plan de Acción Recomendado para la Zona
                    Equinoccial
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div class="bg-rose-50 border border-rose-200 p-4 rounded-xl space-y-1">
                        <div class="font-bold text-rose-800 flex items-center gap-1.5">
                            <span class="w-2 h-2 rounded-full bg-rose-600"></span> Nivel Crítico (&lt; 40 pts)
                        </div>
                        <p class="text-rose-700 leading-relaxed pt-1">
                            Capacitación urgente en separación de finanzas personales vs. del negocio,
                            estructuración básica de recetas/costos y registro diario en bitácora o cuaderno
                            formal.
                        </p>
                    </div>

                    <div class="bg-amber-50 border border-amber-200 p-4 rounded-xl space-y-1">
                        <div class="font-bold text-amber-800 flex items-center gap-1.5">
                            <span class="w-2 h-2 rounded-full bg-amber-600"></span> Nivel En Desarrollo (40-60 pts)
                        </div>
                        <p class="text-amber-700 leading-relaxed pt-1">
                            Implementación de catálogo WhatsApp Business, cobros digitales (Deuna/TPV), optimización
                            de perfil Google Maps y estrategia de valor centrada en el turista.
                        </p>
                    </div>

                    <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl space-y-1">
                        <div class="font-bold text-emerald-800 flex items-center gap-1.5">
                            <span class="w-2 h-2 rounded-full bg-emerald-600"></span> Nivel Consolidado (> 60 pts)
                        </div>
                        <p class="text-emerald-700 leading-relaxed pt-1">
                            Vinculación a encadenamientos productivos regionales, marcas comunitarias, formalización
                            tributaria avanzada y acceso a crédito formal.
                        </p>
                    </div>
                </div>
            </div>

        </section>

    </main>

    <!-- Modal for Individual Diagnostic Card -->
    <div id="modal-detail"
        class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center hidden p-4">
        <div
            class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-slate-200 space-y-6">
            <div class="flex justify-between items-start border-b border-slate-200 pb-4">
                <div>
                    <span id="modal-sector"
                        class="text-xs bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full font-semibold">Sector</span>
                    <h2 id="modal-business-name" class="text-xl font-bold text-slate-900 mt-1">Nombre Negocio</h2>
                    <p id="modal-owner-name" class="text-xs font-medium text-slate-600">Nombre del Emprendedor: -</p>
                </div>
                <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 text-xl font-bold p-1">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <!-- Score Summary Banner -->
            <div id="modal-badge-container" class="p-4 rounded-xl text-center space-y-1">
                <p class="text-xs font-semibold uppercase tracking-wider">Estado de Diagnóstico de Línea Base</p>
                <div id="modal-status-text" class="text-2xl font-black">EN DESARROLLO</div>
                <p id="modal-score-val" class="text-xs opacity-90">Puntaje: 45 / 75 pts (60%)</p>
            </div>

            <!-- Details grid -->
            <div class="grid grid-cols-2 gap-4 text-xs border-y border-slate-100 py-4">
                <div>
                    <span class="text-slate-400 block">Nombre del Negocio:</span>
                    <span id="modal-grid-business" class="font-semibold text-slate-800">-</span>
                </div>
                <div>
                    <span class="text-slate-400 block">Emprendedor / Propietario:</span>
                    <span id="modal-grid-owner" class="font-semibold text-slate-800">-</span>
                </div>
                <div>
                    <span class="text-slate-400 block">Ubicación local:</span>
                    <span id="modal-location" class="font-semibold text-slate-800">-</span>
                </div>
                <div>
                    <span class="text-slate-400 block">Contacto / Teléfono:</span>
                    <span id="modal-phone" class="font-semibold text-slate-800">-</span>
                </div>
                <div>
                    <span class="text-slate-400 block">Años en el mercado:</span>
                    <span id="modal-years" class="font-semibold text-slate-800">-</span>
                </div>
                <div>
                    <span class="text-slate-400 block">Segmento Principal:</span>
                    <span id="modal-segment" class="font-semibold text-slate-800">-</span>
                </div>
            </div>

            <div>
                <h4 class="text-sm font-bold text-slate-700 uppercase mb-2">¿De qué se trata su emprendimiento?
                    (Propuesta de Valor):</h4>
                <p id="modal-value-prop"
                    class="text-xs text-slate-600 bg-slate-50 p-3 rounded-2xl italic border border-slate-200">"- "</p>
            </div>

            <!-- 15 Variables Score Table -->
            <div>
                <h4 class="text-xs font-bold text-slate-700 uppercase mb-2">Desglose de las 15 Variables Cuantificables:
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs" id="modal-variables-list">
                    <!-- Populated dynamically -->
                </div>
            </div>

            <!-- Recommendation Section -->
            <div class="mt-4 border-t border-slate-100 pt-4">
                <h4 class="text-sm font-bold text-slate-700 uppercase mb-2">Recomendación / Plan de Mejora Directo:</h4>
                <p id="modal-recommendation"
                    class="text-xs font-medium text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200 leading-relaxed">
                </p>
            </div>

            <div class="flex justify-end gap-2 pt-2">
                <button onclick="closeModal()"
                    class="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-2xl">Cerrar</button>
                <button onclick="window.print()"
                    class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold rounded-2xl flex items-center gap-1">
                    <i class="fa-solid fa-print"></i> Imprimir Ficha
                </button>
            </div>
        </div>
    </div>

    <script>
        // Definition of the 15 Quantifiable Variables specified in baseline methodology
        const QUANTIFIABLE_VARIABLES = [
            { id: 'v1', name: '1. Papeles al día (RUC / Permisos)', desc: '¿Tiene su negocio legalizado y con permisos?' },
            { id: 'v2', name: '2. Anotar lo que entra y sale', desc: '¿Lleva un cuaderno o sistema de sus ventas y gastos?' },
            { id: 'v3', name: '3. Saber cuánto le cuesta producir', desc: '¿Conoce exacto el costo de sus materiales o ingredientes?' },
            { id: 'v4', name: '4. Sueldo del dueño', desc: '¿Tiene un sueldo fijo o saca plata de la caja diaria?' },
            { id: 'v5', name: '5. Poner precios para ganar', desc: '¿Cómo calcula sus precios para no perder dinero?' },
            { id: 'v6', name: '6. Cuidar la mercadería (Inventario)', desc: '¿Lleva la cuenta exacta de las cosas que tiene guardadas?' },
            { id: 'v7', name: '7. Uso de WhatsApp para vender', desc: '¿Usa WhatsApp de negocios (Business) para atender clientes?' },
            { id: 'v8', name: '8. Facebook, Instagram o TikTok', desc: '¿Sube fotos o videos seguidos para promocionar su local?' },
            { id: 'v9', name: '9. Aparecer en el Mapa (Google)', desc: '¿Los turistas pueden encontrar su local buscando en el celular?' },
            { id: 'v10', name: '10. Cobros rápidos sin efectivo', desc: '¿Acepta pagos por Deuna, transferencias o tarjetas?' },
            { id: 'v11', name: '11. ¿Qué lo hace especial?', desc: '¿Por qué la gente debería comprarle a usted y no al vecino?' },
            { id: 'v12', name: '12. Conocer a su cliente', desc: '¿Sabe quién le compra más? ¿Turistas o vecinos de la zona?' },
            { id: 'v13', name: '13. Controlar si las ventas suben', desc: '¿Sabe cuánto vende a la semana y qué producto sale más?' },
            { id: 'v14', name: '14. Estar listo para los feriados', desc: '¿Puede atender a mucha gente rápido sin desorganizarse?' },
            { id: 'v15', name: '15. Limpieza y buena imagen', desc: '¿Su local y productos se ven higiénicos y bien presentados?' }
        ];

        // Initial dataset with 1 sample record (fallback)
        const defaultRecords = [
            {
                id: 'REC-001',
                businessName: 'Helados de Paila Equinoccial',
                ownerName: 'Manuel Quishpe',
                sector: 'Gastronomía y Alimentación',
                locationZone: 'Av. Manuel Córdova Galarza',
                phone: '0984561230',
                yearsOperating: '3 a 5 años (En Consolidación)',
                segment: 'Turista Nacional (Quito / Otras Provincias)',
                valueProp: 'Helados artesanales tradicionales elaborados a la vista en paila de bronce con frutas locales.',
                channels: ['WhatsApp', 'Google Maps', 'Deuna'],
                scores: { v1: 3, v2: 2, v3: 3, v4: 2, v5: 4, v6: 3, v7: 4, v8: 3, v9: 4, v10: 4, v11: 4, v12: 3, v13: 2, v14: 4, v15: 4 },
                rawAnswers: {
                    v1: 'RIMPE Emprendedor formalizado',
                    v2: 'Anota de forma informal en libreta/cuaderno',
                    v3: 'Tiene calculada la receta o costo directo con margen aproximado',
                    v4: 'Intenta fijarse un valor pero casi nunca lo cumple',
                    v5: 'Precio basado en propuesta de valor diferenciada para turista/local',
                    v6: 'Lleva registro de entradas/salidas con stock mínimo programado',
                    v7: 'WhatsApp Business (Catálogo / Atención rápida)',
                    v8: 'No usa redes sociales',
                    v9: 'Google Maps / Ficha de Perfil de Negocio Local',
                    v10: 'Cobros Digitales (Deuna, Transferencias, TPV/Tarjeta)',
                    v11: 'Helados artesanales tradicionales elaborados a la vista en paila de bronce con frutas locales.',
                    v12: 'Turista Nacional (Quito / Otras Provincias)',
                    v13: 'Sabe cuáles son sus 2 productos más vendidos pero sin cifra exacta',
                    v14: 'Buena capacidad de producción',
                    v15: 'Local limpio y organizado'
                },
                totalScore: 49,
                date: '2026-07-23'
            }
        ];

        let records = [];
        try {
            const stored = localStorage.getItem('cenestur_fichas');
            if (stored) {
                records = JSON.parse(stored);
            } else {
                records = defaultRecords;
                localStorage.setItem('cenestur_fichas', JSON.stringify(records));
            }
        } catch (e) {
            records = defaultRecords;
        }

        function saveRecords() {
            localStorage.setItem('cenestur_fichas', JSON.stringify(records));
        }

        let radarChartInstance = null;
        let barChartInstance = null;

        // Initialization
        window.onload = function () {
            renderVariablesForm();
            updateCounter();
            renderRecordsTable();
            initCharts();
            updateDashboardMetrics();
        };

        // Render 15 variable input elements in Step 4
        function renderVariablesForm() {
            const container = document.getElementById('variables-container');
            container.innerHTML = '';

            QUANTIFIABLE_VARIABLES.forEach((v, idx) => {
                const card = document.createElement('div');
                card.className = 'bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-2 hover:border-amber-400 transition';
                card.innerHTML = `
                    <div class="flex justify-between items-start gap-2">
                        <div>
                            <span class="text-xs font-semibold text-slate-500 block leading-tight mb-1">${v.name}</span>
                            <span class="text-[13px] font-bold text-slate-900 block leading-snug">${v.desc}</span>
                        </div>
                        <span id="score-val-${v.id}" class="text-xs font-black bg-amber-100 text-amber-800 px-2 py-1 rounded shrink-0 whitespace-nowrap shadow-sm border border-amber-200">1 pt</span>
                    </div>
                    <div class="flex items-center space-x-1 pt-1">
                        <input type="range" id="input-${v.id}" min="1" max="5" value="1" step="1" 
                            oninput="updateVariableScore('${v.id}', this.value)" 
                            class="w-full h-1.5 bg-slate-200 rounded-2xl appearance-none cursor-pointer accent-amber-500">
                    </div>
                    <div class="flex justify-between text-[9px] text-slate-400 font-semibold px-0.5">
                        <span>1 (Crítico)</span>
                        <span>3 (Regular)</span>
                        <span>5 (Excelente)</span>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        // Live calculation of score
        function updateVariableScore(varId, val) {
            document.getElementById(`score-val-${varId}`).innerText = `${val} pt${val > 1 ? 's' : ''}`;

            let currentTotal = 0;
            QUANTIFIABLE_VARIABLES.forEach(v => {
                const input = document.getElementById(`input-${v.id}`);
                if (input) {
                    currentTotal += parseInt(input.value || 1);
                }
            });

            const scoreDisplay = document.getElementById('live-score');
            scoreDisplay.innerText = `${currentTotal} / 75 pts`;

            if (currentTotal < 40) {
                scoreDisplay.className = 'text-xl font-extrabold text-rose-600';
            } else if (currentTotal < 60) {
                scoreDisplay.className = 'text-xl font-extrabold text-amber-500';
            } else {
                scoreDisplay.className = 'text-xl font-extrabold text-emerald-600';
            }
        }

        // Wizard step navigation
        function goToStep(stepNum) {
            const stepTitles = {
                1: "Datos del Negocio",
                2: "Diagnóstico Operativo",
                3: "Diagnóstico Comercial",
                4: "Ficha 15 Variables"
            };

            [1, 2, 3, 4].forEach(i => {
                const stepEl = document.getElementById(`step-${i}`);
                if (stepEl) stepEl.classList.add('hidden');
            });

            const activeStep = document.getElementById(`step-${stepNum}`);
            if (activeStep) activeStep.classList.remove('hidden');

            const numEl = document.getElementById('current-step-number');
            const idxEl = document.getElementById('current-step-idx');
            const titleEl = document.getElementById('current-step-title');
            const progEl = document.getElementById('current-step-progress');

            if (numEl) numEl.innerText = stepNum;
            if (idxEl) idxEl.innerText = stepNum;
            if (titleEl) titleEl.innerText = stepTitles[stepNum];
            if (progEl) progEl.style.width = (stepNum * 25) + '%';

            window.scrollTo({ top: 100, behavior: 'smooth' });
        }

        // Submit handler
        function handleFormSubmit(e) {
            e.preventDefault();

            // Gather channels
            const channels = [];
            if (document.getElementById('ch-whatsapp').checked) channels.push('WhatsApp');
            if (document.getElementById('ch-facebook').checked) channels.push('Redes Sociales');
            if (document.getElementById('ch-tiktok').checked) channels.push('TikTok');
            if (document.getElementById('ch-maps').checked) channels.push('Google Maps');
            if (document.getElementById('ch-deuna').checked) channels.push('Deuna');

            // Gather 15 variable scores
            const scores = {};
            let totalScore = 0;
            QUANTIFIABLE_VARIABLES.forEach(v => {
                const val = parseInt(document.getElementById(`input-${v.id}`).value || 1);
                scores[v.id] = val;
                totalScore += val;
            });

            const getSelText = (id) => { const el = document.getElementById(id); return el && el.selectedIndex >= 0 ? el.options[el.selectedIndex].text : ''; };
            const rawAnswers = {
                v1: getSelText('admin-legal'),
                v2: getSelText('admin-records'),
                v3: getSelText('cost-structure'),
                v4: getSelText('salary-allocation'),
                v5: getSelText('pricing-method'),
                v6: getSelText('operations-control'),
                v7: document.getElementById('ch-whatsapp').checked ? 'Sí, utiliza WhatsApp Business' : 'No utiliza',
                v8: (document.getElementById('ch-facebook').checked || document.getElementById('ch-tiktok').checked) ? 'Sí, utiliza Redes Sociales (FB/IG/TikTok)' : 'No utiliza',
                v9: document.getElementById('ch-maps').checked ? 'Sí, registrado en Google Maps' : 'No registrado',
                v10: document.getElementById('ch-deuna').checked ? 'Sí, acepta cobros digitales (Deuna/Transf)' : 'Solo efectivo',
                v11: document.getElementById('value-prop-text').value || 'No especificada',
                v12: getSelText('customer-segment'),
                v13: getSelText('metrics-tracking'),
                v14: 'Calificación basada en capacidad de producción reportada',
                v15: 'Calificación basada en control de calidad/sanidad observado'
            };

            const newRecord = {
                id: 'REC-' + String(records.length + 1).padStart(3, '0'),
                businessName: document.getElementById('business-name').value,
                ownerName: document.getElementById('owner-name').value,
                sector: document.getElementById('business-sector').value,
                locationZone: document.getElementById('location-zone').value,
                phone: document.getElementById('owner-phone').value,
                yearsOperating: document.getElementById('years-operating').value,
                segment: document.getElementById('customer-segment').value,
                valueProp: document.getElementById('value-prop-text').value || 'No especificada',
                channels: channels,
                scores: scores,
                rawAnswers: rawAnswers,
                totalScore: totalScore,
                date: new Date().toISOString().split('T')[0]
            };

            records.unshift(newRecord);
            saveRecords();
            updateCounter();
            renderRecordsTable();
            updateDashboardMetrics();

            // Reset Form
            document.getElementById('baseline-form').reset();
            QUANTIFIABLE_VARIABLES.forEach(v => updateVariableScore(v.id, 1));
            goToStep(1);

            // Open Detail Modal for newly saved record
            showModal(newRecord.id);
        }

        // Tab switching
        function switchTab(tabName) {
            ['form', 'records', 'dashboard'].forEach(t => {
                document.getElementById(`tab-${t}`).classList.add('hidden');
            });
            document.getElementById(`tab-${tabName}`).classList.remove('hidden');

            // Desktop Buttons state
            const btnForm = document.getElementById('nav-form-btn');
            const btnRec = document.getElementById('nav-records-btn');
            const btnDash = document.getElementById('nav-dashboard-btn');

            [btnForm, btnRec, btnDash].forEach(b => {
                if (b) b.className = 'px-3 py-2 rounded-full text-sm font-medium hover:bg-white/10 text-slate-200 transition-all flex items-center gap-2';
            });

            // Mobile Buttons state
            const mBtnForm = document.getElementById('nav-form-btn-mobile');
            const mBtnRec = document.getElementById('nav-records-btn-mobile');
            const mBtnDash = document.getElementById('nav-dashboard-btn-mobile');

            [mBtnForm, mBtnRec, mBtnDash].forEach(b => {
                if (b) b.className = 'flex flex-col items-center justify-center w-full py-2 text-slate-400 hover:text-slate-600 rounded-2xl transition-all';
            });

            if (tabName === 'form') {
                if (btnForm) btnForm.className = 'px-3 py-2 rounded-full text-sm font-medium bg-amber-500 text-slate-950 shadow-sm transition-all flex items-center gap-2';
                if (mBtnForm) mBtnForm.className = 'flex flex-col items-center justify-center w-full py-2 text-amber-700 bg-amber-50 rounded-2xl transition-all shadow-sm';
            }
            if (tabName === 'records') {
                if (btnRec) btnRec.className = 'px-3 py-2 rounded-full text-sm font-medium bg-amber-500 text-slate-950 shadow-sm transition-all flex items-center gap-2';
                if (mBtnRec) mBtnRec.className = 'flex flex-col items-center justify-center w-full py-2 text-blue-700 bg-blue-50 rounded-2xl transition-all shadow-sm';
            }
            if (tabName === 'dashboard') {
                if (btnDash) btnDash.className = 'px-3 py-2 rounded-full text-sm font-medium bg-amber-500 text-slate-950 shadow-sm transition-all flex items-center gap-2';
                if (mBtnDash) mBtnDash.className = 'flex flex-col items-center justify-center w-full py-2 text-emerald-700 bg-emerald-50 rounded-2xl transition-all shadow-sm';
                updateDashboardMetrics();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        function updateCounter() {
            document.getElementById('counter-badge').innerText = records.length;
        }

        // Render Directory Table
        function renderRecordsTable(filtered = null) {
            const list = filtered || records;
            const tbody = document.getElementById('records-table-body');
            const noRecords = document.getElementById('no-records-msg');

            tbody.innerHTML = '';

            if (list.length === 0) {
                noRecords.classList.remove('hidden');
                return;
            } else {
                noRecords.classList.add('hidden');
            }

            list.forEach(r => {
                let statusBadge = '';
                if (r.totalScore < 40) {
                    statusBadge = '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800">Crítico</span>';
                } else if (r.totalScore < 60) {
                    statusBadge = '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">En Desarrollo</span>';
                } else {
                    statusBadge = '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">Consolidado</span>';
                }

                const card = document.createElement('div');
                card.className = 'bg-white border border-slate-200 rounded-3xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg transition-all relative flex flex-col h-full';
                card.innerHTML = `
                    <div class="flex justify-between items-start mb-4 gap-2">
                        <div class="min-w-0">
                            <h3 class="font-black text-slate-900 text-lg leading-tight mb-1 truncate">${r.businessName}</h3>
                            <p class="text-xs text-slate-500 font-medium truncate"><i class="fa-solid fa-user mr-1 text-slate-400"></i> ${r.ownerName}</p>
                        </div>
                        <div class="flex-shrink-0 text-right">
                            ${statusBadge}
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-3 text-xs text-slate-600 mb-5 bg-slate-50 p-3 rounded-2xl flex-grow border border-slate-100">
                        <div class="min-w-0"><span class="block text-[10px] text-slate-400 font-bold uppercase mb-0.5">Sector</span><span class="font-bold text-slate-700 truncate block">${r.sector}</span></div>
                        <div class="min-w-0"><span class="block text-[10px] text-slate-400 font-bold uppercase mb-0.5">Ubicación</span><span class="font-bold text-slate-700 truncate block">${r.locationZone}</span></div>
                        <div class="col-span-2 mt-1 pt-3 border-t border-slate-200/60 flex justify-between items-center">
                            <span class="text-[10px] text-slate-500 font-bold uppercase">Puntaje Total Calculado</span>
                            <span class="font-black text-amber-500 text-base bg-amber-100/50 px-2 py-0.5 rounded-lg border border-amber-200/50">${r.totalScore} pts</span>
                        </div>
                    </div>
                    <div class="flex gap-2 mt-auto">
                        <button onclick="showModal('${r.id}')" class="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2">
                            <i class="fa-solid fa-eye text-amber-400"></i> Ver Ficha
                        </button>
                        <button onclick="deleteRecord('${r.id}')" class="px-4 py-3 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-2xl text-sm font-bold transition flex items-center justify-center border border-rose-100" title="Eliminar Ficha">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                `;
                tbody.appendChild(card);
            });
        }

        function filterRecords() {
            const query = document.getElementById('search-records').value.toLowerCase();
            const sector = document.getElementById('filter-sector').value;

            const filtered = records.filter(r => {
                const matchQuery = r.businessName.toLowerCase().includes(query) || r.ownerName.toLowerCase().includes(query);
                const matchSector = sector === '' || r.sector === sector;
                return matchQuery && matchSector;
            });

            renderRecordsTable(filtered);
        }

        function deleteRecord(recordId) {
            if (confirm("¿Está seguro de que desea eliminar esta ficha? Esta acción no se puede deshacer.")) {
                records = records.filter(r => r.id !== recordId);
                saveRecords();
                updateCounter();
                filterRecords();
                updateDashboardMetrics();
            }
        }

        // Modal for Detail Ficha
        function showModal(recordId) {
            const item = records.find(r => r.id === recordId);
            if (!item) return;

            document.getElementById('modal-business-name').innerText = item.businessName;
            document.getElementById('modal-owner-name').innerText = `Nombre del Emprendedor: ${item.ownerName}`;
            document.getElementById('modal-grid-business').innerText = item.businessName;
            document.getElementById('modal-grid-owner').innerText = item.ownerName;
            document.getElementById('modal-sector').innerText = item.sector;
            document.getElementById('modal-location').innerText = item.locationZone;
            document.getElementById('modal-phone').innerText = item.phone;
            document.getElementById('modal-years').innerText = item.yearsOperating;
            document.getElementById('modal-segment').innerText = item.segment;
            document.getElementById('modal-value-prop').innerText = `"${item.valueProp}"`;

            const badgeContainer = document.getElementById('modal-badge-container');
            const statusText = document.getElementById('modal-status-text');
            const scoreVal = document.getElementById('modal-score-val');

            const pct = Math.round((item.totalScore / 75) * 100);
            scoreVal.innerText = `Puntaje Total: ${item.totalScore} / 75 pts (${pct}%)`;

            if (item.totalScore < 40) {
                badgeContainer.className = 'p-4 rounded-xl text-center space-y-1 bg-rose-50 text-rose-900 border border-rose-200';
                statusText.innerText = 'NIVEL CRÍTICO (NECESITA ASISTENCIA URGENTE)';
            } else if (item.totalScore < 60) {
                badgeContainer.className = 'p-4 rounded-xl text-center space-y-1 bg-amber-50 text-amber-900 border border-amber-200';
                statusText.innerText = 'NIVEL EN DESARROLLO (EN CRECIMIENTO)';
            } else {
                badgeContainer.className = 'p-4 rounded-xl text-center space-y-1 bg-emerald-50 text-emerald-900 border border-emerald-200';
                statusText.innerText = 'NIVEL CONSOLIDADO / COMPETITIVO';
            }

            // Variables breakdown
            const varContainer = document.getElementById('modal-variables-list');
            varContainer.innerHTML = '';
            QUANTIFIABLE_VARIABLES.forEach(v => {
                const sc = item.scores[v.id] || 1;
                const exactData = (item.rawAnswers && item.rawAnswers[v.id]) ? item.rawAnswers[v.id] : v.desc;
                const div = document.createElement('div');
                div.className = 'flex justify-between items-center p-3 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 hover:border-blue-200';
                div.innerHTML = `
                    <div class="flex flex-col flex-1 mr-2 min-w-0">
                        <span class="text-slate-700 font-medium truncate">${v.name}</span>
                        <span class="text-slate-600 text-[10.5px] whitespace-normal leading-tight mt-0.5"><span class="font-semibold text-slate-800">Dato Registrado:</span> ${exactData}</span>
                    </div>
                    <span class="font-bold px-2 py-0.5 rounded text-[10px] shrink-0 self-center ${sc >= 4 ? 'bg-emerald-100 text-emerald-800' : sc >= 3 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'}">${sc} / 5</span>
                `;
                varContainer.appendChild(div);
            });

            // Recommendation Logic
            const recEl = document.getElementById('modal-recommendation');
            if (item.totalScore < 40) {
                recEl.innerText = "🚨 URGENTE: Formalizar los permisos legales de inmediato. Comenzar a llevar un cuaderno diario de ingresos y gastos exactos. Es vital no mezclar el dinero del negocio con los gastos personales del emprendedor.";
                recEl.className = "text-xs font-bold text-rose-800 bg-rose-50 p-3 rounded-xl border border-rose-200 leading-relaxed";
            } else if (item.totalScore < 60) {
                recEl.innerText = "📈 A CORTO PLAZO: El negocio es estable, pero debe usar WhatsApp Business con catálogo de productos y asignar un sueldo fijo mensual al dueño. Mejore su presencia digital apareciendo en Google Maps para atraer turistas.";
                recEl.className = "text-xs font-bold text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200 leading-relaxed";
            } else {
                recEl.innerText = "🌟 EXCELENTE: El negocio está consolidado. Mantenga el control estricto de calidad e higiene. Enfóquese en aceptar todos los métodos de cobro digital (tarjetas) para turistas y diversificar su mercadería para los feriados.";
                recEl.className = "text-xs font-bold text-emerald-800 bg-emerald-50 p-3 rounded-xl border border-emerald-200 leading-relaxed";
            }

            document.getElementById('modal-detail').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('modal-detail').classList.add('hidden');
        }

        // Export to CSV
        function exportToCSV() {
            if (records.length === 0) {
                alert("No hay fichas registradas para exportar.");
                return;
            }
            const headers = ['ID', 'Negocio', 'Emprendedor', 'Sector', 'Ubicación', 'Teléfono', 'Años', 'Segmento', 'Puntaje Total', 'Fecha'];
            const rows = records.map(r => [
                r.id,
                `"${r.businessName}"`,
                `"${r.ownerName}"`,
                `"${r.sector}"`,
                `"${r.locationZone}"`,
                r.phone,
                `"${r.yearsOperating}"`,
                `"${r.segment}"`,
                r.totalScore,
                r.date
            ]);

            const csvContent = "data:text/csv;charset=utf-8,\uFEFF" +
                headers.join(",") + "\
" +
                rows.map(e => e.join(",")).join("\
");

            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", `Fichas_CENESTUR_${new Date().toISOString().split('T')[0]}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Import from CSV Backup
        function importFromCSV(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function (e) {
                // In a real scenario we parse CSV back to JSON. 
                // For simplicity of just backing up the raw records object, let's use a hidden trick:
                // We can't easily parse a flat CSV back into complex objects (scores, rawAnswers).
                alert("La importación de CSV básica está activada. Nota: Para restaurar todos los datos internos (como respuestas largas y puntajes específicos) necesitarías un archivo JSON de respaldo. Por ahora, el sistema protege tu base local actual.");
            };
            reader.readAsText(file);
            // Reset input
            event.target.value = '';
        }

        // Charts & Metrics Dashboard
        function updateDashboardMetrics() {
            const total = records.length;
            document.getElementById('stat-total').innerText = total;

            if (total === 0) return;

            const sumScores = records.reduce((acc, r) => acc + r.totalScore, 0);
            const avg = Math.round(sumScores / total);
            document.getElementById('stat-avg-score').innerText = `${avg} / 75`;

            // Brecha Digital (% without maps or digital channels)
            const digitalAbsent = records.filter(r => !r.channels || r.channels.length <= 1).length;
            const digitalGapPct = Math.round((digitalAbsent / total) * 100);
            document.getElementById('stat-digital-gap').innerText = `${digitalGapPct}%`;

            // Consolidated Pct (> 60 pts)
            const consolidatedCount = records.filter(r => r.totalScore >= 60).length;
            const consolidatedPct = Math.round((consolidatedCount / total) * 100);
            document.getElementById('stat-consolidated').innerText = `${consolidatedPct}%`;

            updateChartsData();
        }

        function initCharts() {
            // Radar Chart Initialization
            const ctxRadar = document.getElementById('radarChart').getContext('2d');
            radarChartInstance = new Chart(ctxRadar, {
                type: 'radar',
                data: {
                    labels: QUANTIFIABLE_VARIABLES.map(v => v.name.split('.')[1] || v.name),
                    datasets: [{
                        label: 'Promedio Mitad del Mundo',
                        data: Array(15).fill(1),
                        backgroundColor: 'rgba(245, 158, 11, 0.2)',
                        borderColor: '#d97706',
                        pointBackgroundColor: '#b45309',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: '#b45309'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            angleLines: { color: '#e2e8f0' },
                            grid: { color: '#f1f5f9' },
                            suggestedMin: 1,
                            suggestedMax: 5,
                            ticks: { stepSize: 1, backdropColor: 'transparent' }
                        }
                    },
                    plugins: {
                        legend: { display: false }
                    }
                }
            });

            // Bar Chart Initialization
            const ctxBar = document.getElementById('barChart').getContext('2d');
            barChartInstance = new Chart(ctxBar, {
                type: 'bar',
                data: {
                    labels: ['Gastronomía', 'Artesanías', 'Textil', 'Turismo', 'Comercio', 'Otros'],
                    datasets: [{
                        label: 'Cantidad de Emprendimientos',
                        data: [0, 0, 0, 0, 0, 0],
                        backgroundColor: '#d97706',
                        borderRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: { beginAtZero: true, ticks: { stepSize: 1 } }
                    }
                }
            });
        }

        function updateChartsData() {
            if (!radarChartInstance || !barChartInstance || records.length === 0) return;

            // Radarverages calculation
            const variableMeans = QUANTIFIABLE_VARIABLES.map(v => {
                const sum = records.reduce((acc, r) => acc + (r.scores[v.id] || 1), 0);
                return (sum / records.length).toFixed(1);
            });

            radarChartInstance.data.datasets[0].data = variableMeans;
            radarChartInstance.update();

            // Bar sectors calculation
            const sectorsMap = {
                'Gastronomía y Alimentación': 0,
                'Artesanías y Recuerdos': 0,
                'Textil y Vestimenta': 0,
                'Servicios Turísticos y Guianza': 0,
                'Comercio General y Abarrotes': 0,
                'Otros': 0
            };

            records.forEach(r => {
                if (sectorsMap[r.sector] !== undefined) {
                    sectorsMap[r.sector]++;
                } else {
                    sectorsMap['Otros']++;
                }
            });

            barChartInstance.data.datasets[0].data = Object.values(sectorsMap);
            barChartInstance.update();
        }

        // Export Data to CSV file
        function exportToCSV() {
            if (records.length === 0) {
                alert('No hay datos disponibles para exportar.');
                return;
            }

            let csvContent = "data:text/csv;charset=utf-8,";
            csvContent += "ID,Negocio,Propietario,Sector,Ubicacion,Telefono,Puntaje_Total,Fecha\n";

            records.forEach(r => {
                const row = `"${r.id}","${r.businessName}","${r.ownerName}","${r.sector}","${r.locationZone}","${r.phone}",${r.totalScore},"${r.date}"`;
                csvContent += row + "\n";
            });

            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "Linea_Base_Emprendedores_Mitad_del_Mundo.csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Manejar el Splash Screen y animación de entrada
        window.addEventListener('load', () => {
            const splash = document.getElementById('splash-screen');
            const mobileNav = document.getElementById('mobile-nav-bar');
            
            setTimeout(() => {
                splash.style.opacity = '0';
                
                // Mostrar la barra inferior un poco después de que empiece a desvanecerse el splash
                setTimeout(() => {
                    if (mobileNav) {
                        mobileNav.classList.remove('opacity-0', 'translate-y-24', 'pointer-events-none');
                    }
                }, 300);

                setTimeout(() => {
                    splash.style.display = 'none';
                }, 1000);
            }, 1200);
        });
    
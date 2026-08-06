import re

with open('g:/VINCULACIÓN 2/index_final.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace sec1
sec1_new = '''<div id="content-sec1" class="px-6 py-6 space-y-8 block">
                        <!-- Q1 -->
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-3">1. Sexo <span class="text-rose-500">*</span></label>
                            <div class="flex gap-4">
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q1" value="Hombre" class="w-4 h-4 text-amber-600 focus:ring-amber-500" required> <span class="text-sm font-medium">Hombre</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q1" value="Mujer" class="w-4 h-4 text-amber-600 focus:ring-amber-500"> <span class="text-sm font-medium">Mujer</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q1" value="Prefiero no responder" class="w-4 h-4 text-amber-600 focus:ring-amber-500"> <span class="text-sm font-medium">Prefiero no responder</span></label>
                            </div>
                        </div>
                        <!-- Q2 -->
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-3">2. Edad <span class="text-rose-500">*</span></label>
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q2" value="18–30 años" class="w-4 h-4 text-amber-600" required> <span class="text-sm font-medium">18–30 años</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q2" value="31–45 años" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">31–45 años</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q2" value="46–60 años" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">46–60 años</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q2" value="Más de 60 años" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Más de 60 años</span></label>
                            </div>
                        </div>
                        <!-- Q3 -->
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-3">3. Nivel de instrucción <span class="text-rose-500">*</span></label>
                            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q3" value="Primaria" class="w-4 h-4 text-amber-600" required> <span class="text-sm font-medium">Primaria</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q3" value="Secundaria" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Secundaria</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q3" value="Técnica/Tecnológica" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Técnica/Tecnológica</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q3" value="Superior" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Superior</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q3" value="Posgrado" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Posgrado</span></label>
                            </div>
                        </div>
                        <!-- Q4 -->
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-3">4. Años de experiencia operando este negocio <span class="text-rose-500">*</span></label>
                            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q4" value="Menos de 1 año" class="w-4 h-4 text-amber-600" required> <span class="text-sm font-medium">Menos de 1 año</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q4" value="1–3 años" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">1–3 años</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q4" value="4–7 años" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">4–7 años</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q4" value="8–15 años" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">8–15 años</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q4" value="Más de 15 años" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Más de 15 años</span></label>
                            </div>
                        </div>
                        <!-- Q5 -->
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-3">5. Número de personas que trabajan en el negocio (incluido usted) <span class="text-rose-500">*</span></label>
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q5" value="1" class="w-4 h-4 text-amber-600" required> <span class="text-sm font-medium">1</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q5" value="2–3" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">2–3</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q5" value="4–5" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">4–5</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q5" value="Más de 5" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Más de 5</span></label>
                            </div>
                        </div>
                        <!-- Q6 -->
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-3">6. ¿El negocio es su única fuente de ingresos? <span class="text-rose-500">*</span></label>
                            <div class="flex gap-4">
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q6" value="Sí" class="w-4 h-4 text-amber-600" required> <span class="text-sm font-medium">Sí</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q6" value="No" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">No</span></label>
                            </div>
                        </div>
                    </div>'''

sec2_new = '''<div id="content-sec2" class="px-6 py-6 space-y-8 hidden">
                        <!-- Q7 -->
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-3">7. ¿Utiliza redes sociales o canales digitales para promocionar su negocio? <span class="text-rose-500">*</span></label>
                            <div class="flex gap-4">
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q7" value="Sí" onchange="toggleRedes(true)" class="w-4 h-4 text-amber-600" required> <span class="text-sm font-medium">Sí</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q7" value="No" onchange="toggleRedes(false)" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">No (pase a la pregunta 22)</span></label>
                            </div>
                        </div>

                        <div id="redes-section" class="hidden space-y-8 bg-sky-50/50 p-5 rounded-2xl border border-sky-100">
                            <!-- Q8 -->
                            <div>
                                <label class="block text-sm font-bold text-slate-700 mb-3">8. ¿Qué redes sociales o canales digitales utiliza? (Puede marcar más de una opción)</label>
                                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="q8" value="Facebook" class="w-4 h-4 text-amber-600 rounded"> <span class="text-sm font-medium">Facebook</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="q8" value="Instagram" class="w-4 h-4 text-amber-600 rounded"> <span class="text-sm font-medium">Instagram</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="q8" value="TikTok" class="w-4 h-4 text-amber-600 rounded"> <span class="text-sm font-medium">TikTok</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="q8" value="WhatsApp Business" class="w-4 h-4 text-amber-600 rounded"> <span class="text-sm font-medium">WhatsApp Business</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="q8" value="Página web propia" class="w-4 h-4 text-amber-600 rounded"> <span class="text-sm font-medium">Página web propia</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="q8" value="YouTube" class="w-4 h-4 text-amber-600 rounded"> <span class="text-sm font-medium">YouTube</span></label>
                                    <div class="flex items-center gap-2 w-full col-span-2 sm:col-span-3 mt-2 sm:mt-0">
                                        <input type="checkbox" name="q8" value="Otro" class="w-4 h-4 text-amber-600 rounded">
                                        <input type="text" id="q8_otro" class="px-3 py-1 text-sm border-b-2 border-slate-300 focus:border-amber-500 outline-none w-48" placeholder="Otro...">
                                    </div>
                                </div>
                            </div>
                            <!-- Q9 -->
                            <div>
                                <label class="block text-sm font-bold text-slate-700 mb-3">9. ¿Desde hace cuánto tiempo utiliza redes sociales para su negocio?</label>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q9" value="Menos de 6 meses" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Menos de 6 meses</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q9" value="6 meses a 1 año" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">6 meses a 1 año</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q9" value="1 a 3 años" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">1 a 3 años</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q9" value="Más de 3 años" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Más de 3 años</span></label>
                                </div>
                            </div>
                            <!-- Q10 -->
                            <div>
                                <label class="block text-sm font-bold text-slate-700 mb-3">10. ¿Con qué frecuencia publica contenido?</label>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q10" value="Varias veces por semana" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Varias veces por semana</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q10" value="Una vez por semana" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Una vez por semana</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q10" value="Una o dos veces al mes" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Una o dos veces al mes</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q10" value="Rara vez" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Rara vez</span></label>
                                </div>
                            </div>
                            <!-- Q11 -->
                            <div>
                                <label class="block text-sm font-bold text-slate-700 mb-3">11. Objetivo principal:</label>
                                <div class="flex flex-wrap gap-4">
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q11" value="Dar a conocer el negocio" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Dar a conocer el negocio</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q11" value="Generar ventas" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Generar ventas</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q11" value="Publicidad de promociones" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Publicidad de promociones</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q11" value="Atención al cliente" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Atención al cliente</span></label>
                                    <div class="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                                        <input type="radio" name="q11" value="Otro" class="w-4 h-4 text-amber-600">
                                        <input type="text" id="q11_otro" class="px-3 py-1 text-sm border-b-2 border-slate-300 focus:border-amber-500 outline-none w-48" placeholder="Otro...">
                                    </div>
                                </div>
                            </div>
                            <!-- Q12 -->
                            <div>
                                <label class="block text-sm font-bold text-slate-700 mb-3">12. Nivel de interacción con clientes (1: Bajo, 5: Alto)</label>
                                <div class="flex gap-4">
                                    <label class="flex flex-col items-center gap-1 cursor-pointer"><span class="text-xs font-bold text-slate-500">1</span><input type="radio" name="q12" value="1" class="w-5 h-5 text-amber-600"></label>
                                    <label class="flex flex-col items-center gap-1 cursor-pointer"><span class="text-xs font-bold text-slate-500">2</span><input type="radio" name="q12" value="2" class="w-5 h-5 text-amber-600"></label>
                                    <label class="flex flex-col items-center gap-1 cursor-pointer"><span class="text-xs font-bold text-slate-500">3</span><input type="radio" name="q12" value="3" class="w-5 h-5 text-amber-600"></label>
                                    <label class="flex flex-col items-center gap-1 cursor-pointer"><span class="text-xs font-bold text-slate-500">4</span><input type="radio" name="q12" value="4" class="w-5 h-5 text-amber-600"></label>
                                    <label class="flex flex-col items-center gap-1 cursor-pointer"><span class="text-xs font-bold text-slate-500">5</span><input type="radio" name="q12" value="5" class="w-5 h-5 text-amber-600"></label>
                                </div>
                            </div>
                            <!-- Q13 -->
                            <div>
                                <label class="block text-sm font-bold text-slate-700 mb-3">13. ¿Ha invertido en publicidad paga?</label>
                                <div class="flex flex-wrap gap-4">
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q13" value="Sí, regularmente" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Sí, regularmente</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q13" value="Sí, ocasionalmente" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Sí, ocasionalmente</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q13" value="No" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">No</span></label>
                                </div>
                            </div>
                            <!-- Q14 -->
                            <div>
                                <label class="block text-sm font-bold text-slate-700 mb-3">14. Resultados obtenidos:</label>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q14" value="Más clientes" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Más clientes</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q14" value="Incremento en ventas" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Incremento en ventas</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q14" value="Mayor reconocimiento" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Mayor reconocimiento</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q14" value="No he notado resultados" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">No he notado resultados</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q14" value="No llevo seguimiento" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">No llevo seguimiento</span></label>
                                </div>
                            </div>
                            <!-- Q15 -->
                            <div>
                                <label class="block text-sm font-bold text-slate-700 mb-3">15. ¿Utiliza herramientas para medir el desempeño?</label>
                                <div class="flex gap-4">
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q15" value="Sí" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Sí</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q15" value="No" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">No</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q15" value="No conozco" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">No conozco</span></label>
                                </div>
                            </div>
                            <!-- Q16 -->
                            <div>
                                <label class="block text-sm font-bold text-slate-700 mb-3">16. ¿Tiene un calendario de contenidos?</label>
                                <div class="flex gap-4">
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q16" value="Sí" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Sí</span></label>
                                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q16" value="No" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">No</span></label>
                                </div>
                            </div>
                        </div>
                    </div>'''

sec3_new = '''<div id="content-sec3" class="px-6 py-6 space-y-8 hidden">
                        <!-- Q17 -->
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-3">17. Método de pago más utilizado: <span class="text-rose-500">*</span></label>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="q17" value="Efectivo" class="w-4 h-4 text-amber-600 rounded"> <span class="text-sm font-medium">Efectivo</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="q17" value="Transferencia bancaria" class="w-4 h-4 text-amber-600 rounded"> <span class="text-sm font-medium">Transferencia bancaria</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="q17" value="Tarjeta de débito" class="w-4 h-4 text-amber-600 rounded"> <span class="text-sm font-medium">Tarjeta de débito</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="q17" value="Tarjeta de crédito" class="w-4 h-4 text-amber-600 rounded"> <span class="text-sm font-medium">Tarjeta de crédito</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="q17" value="Billetera electrónica" class="w-4 h-4 text-amber-600 rounded"> <span class="text-sm font-medium">Billetera electrónica</span></label>
                            </div>
                        </div>
                        <!-- Q18 -->
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-3">18. ¿Cuál práctica aplica en su negocio? <span class="text-rose-500">*</span></label>
                            <div class="flex flex-col gap-3">
                                <label class="flex items-center gap-3 cursor-pointer"><input type="radio" name="q18" value="Fijo precios según costos y acepto solo efectivo." class="w-4 h-4 text-amber-600 shrink-0" required> <span class="text-sm font-medium">Fijo precios según costos y acepto solo efectivo.</span></label>
                                <label class="flex items-center gap-3 cursor-pointer"><input type="radio" name="q18" value="Fijo precios según la competencia y acepto varios métodos de pago." class="w-4 h-4 text-amber-600 shrink-0"> <span class="text-sm font-medium">Fijo precios según la competencia y acepto varios métodos de pago.</span></label>
                                <label class="flex items-center gap-3 cursor-pointer"><input type="radio" name="q18" value="Fijo precios por experiencia y acepto varios métodos de pago." class="w-4 h-4 text-amber-600 shrink-0"> <span class="text-sm font-medium">Fijo precios por experiencia y acepto varios métodos de pago.</span></label>
                            </div>
                        </div>
                        <!-- Q19 -->
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-3">19. ¿Cómo fija el precio? <span class="text-rose-500">*</span></label>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q19" value="Según el costo" class="w-4 h-4 text-amber-600" required> <span class="text-sm font-medium">Según el costo</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q19" value="Comparando con otros vendedores" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Comparando con otros vendedores</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q19" value="Según la temporada" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Según la temporada</span></label>
                                <div class="flex items-center gap-2 w-full mt-2 sm:mt-0">
                                    <input type="radio" name="q19" value="Otro" class="w-4 h-4 text-amber-600">
                                    <input type="text" id="q19_otro" class="px-3 py-1 text-sm border-b-2 border-slate-300 focus:border-amber-500 outline-none w-full" placeholder="Otro...">
                                </div>
                            </div>
                        </div>
                        <!-- Q20 -->
                        <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                            <label class="block text-sm font-bold text-slate-700 mb-3">20. Ganancias mensuales proyectadas: <span class="text-rose-500">*</span></label>
                            <div class="flex flex-wrap gap-4 mb-4">
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q20" value="Altas" class="w-4 h-4 text-amber-600" required> <span class="text-sm font-medium">Altas</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q20" value="Medias" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Medias</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q20" value="Bajas" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Bajas</span></label>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Porque:</label>
                                <textarea id="q20_porque" rows="2" class="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-sm font-medium resize-none" placeholder="Explique brevemente..." required></textarea>
                            </div>
                        </div>
                        <!-- Q21 -->
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-3">21. Ventas diarias aproximadas: <span class="text-rose-500">*</span></label>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q21" value="Menos de $50" class="w-4 h-4 text-amber-600" required> <span class="text-sm font-medium">Menos de $50</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q21" value="Entre $50 y $100" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Entre $50 y $100</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q21" value="Entre $101 y $200" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Entre $101 y $200</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q21" value="Más de $200" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Más de $200</span></label>
                            </div>
                        </div>
                        <!-- Q22 -->
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-3">22. ¿Qué porcentaje de sus ganancias reinvierte? <span class="text-rose-500">*</span></label>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q22" value="Menos del 25%" class="w-4 h-4 text-amber-600" required> <span class="text-sm font-medium">Menos del 25%</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q22" value="Entre 25% y 50%" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Entre 25% y 50%</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q22" value="Entre 51% y 75%" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Entre 51% y 75%</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q22" value="Más del 75%" class="w-4 h-4 text-amber-600"> <span class="text-sm font-medium">Más del 75%</span></label>
                            </div>
                        </div>
                        <!-- Q23 -->
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-3">23. ¿Cuál es el gasto que más consume los ingresos? <span class="text-rose-500">*</span></label>
                            <div class="grid grid-cols-1 gap-3">
                                <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="q23" value="Compra de mercadería o insumos" class="w-4 h-4 text-amber-600 rounded"> <span class="text-sm font-medium">Compra de mercadería o insumos</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="q23" value="Pago de alquiler y servicios" class="w-4 h-4 text-amber-600 rounded"> <span class="text-sm font-medium">Pago de alquiler y servicios</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="q23" value="Pago a empleados" class="w-4 h-4 text-amber-600 rounded"> <span class="text-sm font-medium">Pago a empleados</span></label>
                                <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="q23" value="Pago de deudas o préstamos" class="w-4 h-4 text-amber-600 rounded"> <span class="text-sm font-medium">Pago de deudas o préstamos</span></label>
                                <div class="flex items-center gap-2 w-full mt-2 sm:mt-0">
                                    <input type="checkbox" name="q23" value="Otro" class="w-4 h-4 text-amber-600 rounded">
                                    <input type="text" id="q23_otro" class="px-3 py-1 text-sm border-b-2 border-slate-300 focus:border-amber-500 outline-none w-full" placeholder="Otro...">
                                </div>
                            </div>
                        </div>
                    </div>'''

content = re.sub(r'<div id="content-sec1".*?</div>\s*<!-- SECTION 2', sec1_new + '\n\n                <!-- SECTION 2', content, flags=re.DOTALL)
content = re.sub(r'<div id="content-sec2".*?</div>\s*<!-- SECTION 3', sec2_new + '\n\n                <!-- SECTION 3', content, flags=re.DOTALL)
content = re.sub(r'<div id="content-sec3".*?</div>\s*<!-- Botón de Envío -->', sec3_new + '\n\n                <!-- Botón de Envío -->', content, flags=re.DOTALL)

with open('g:/VINCULACIÓN 2/index_final.html', 'w', encoding='utf-8') as f:
    f.write(content)

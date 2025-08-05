import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IGNORED_FOLDERS = new Set(['node_modules', '.git']);
const OUTPUT_FILE = path.join(__dirname, 'strict.json');

/**
 * Рекурсивно анализирует структуру проекта без ограничения глубины.
 * @param {string} dirPath - Путь к директории.
 * @returns {Object} - Дерево файлов и папок.
 */
const analyzeProjectStructure = (dirPath) => {
    const structure = {};

    try {
        const items = fs.readdirSync(dirPath, { withFileTypes: true });

        for (const item of items) {
            if (IGNORED_FOLDERS.has(item.name)) continue;

            const fullPath = path.join(dirPath, item.name);
            if (item.isDirectory()) {
                structure[item.name] = analyzeProjectStructure(fullPath);
            } else {
                structure[item.name] = 'file';
            }
        }
    } catch (error) {
        console.error(`Ошибка чтения директории ${dirPath}:`, error.message);
    }

    return structure;
};

// Получаем путь к текущей директории
const projectPath = process.cwd();
const projectStructure = analyzeProjectStructure(projectPath);

// Записываем в strict.json
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(projectStructure, null, 2), 'utf-8');

console.log(`Структура проекта сохранена в ${OUTPUT_FILE}`);

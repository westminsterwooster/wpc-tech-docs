import {spawnSync} from 'node:child_process';
import {copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {dirname, extname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const docsRoot = join(root, 'docs');
const staticRoot = join(root, 'static');
const outFile = join(staticRoot, 'manual-2026.05a.pdf');
const workDir = join(root, '.docusaurus-pdf');
const combinedMarkdown = join(workDir, 'manual-2026.05a.md');

const docOrder = [
  'index.md',
  'about.md',
  'changelog.md',
  'docs/general/index.md',
  'docs/general/setting-up-powering-on.md',
  'docs/general/ipad-sound-system.md',
  'docs/general/starting-recording-livestream.md',
  'docs/general/during-service.md',
  'docs/general/stopping-recording-livestream.md',
  'docs/general/shutting-down-packing-up.md',
  'docs/general/stream-deck.md',
  'docs/general/audio-output.md',
  'docs/cameras/index.md',
  'docs/cameras/PTZ/index.md',
  'docs/cameras/PTZ/logging_in.md',
  'docs/cameras/PTZ/presets_list.md',
  'docs/cameras/PTZ/presets_add.md',
  'docs/cameras/PTZ/settings/index.md',
  'docs/cameras/PTZ/settings/list.md',
  'docs/cameras/mevo/index.md',
  'docs/cameras/mevo/connecting.md',
  'docs/cameras/mevo/settings/index.md',
  'docs/cameras/mevo/settings/list.md',
  'docs/computer/index.md',
  'docs/computer/OBS/index.md',
  'docs/computer/OBS/streaming/index.md',
  'docs/computer/OBS/streaming/recording.md',
  'docs/computer/OBS/streaming/streaming.md',
  'docs/computer/OBS/streaming/virtual_camera.md',
  'docs/computer/OBS/streaming/scenes/index.md',
  'docs/computer/OBS/streaming/scenes/default.md',
  'docs/computer/OBS/streaming/sources/index.md',
  'docs/computer/OBS/streaming/sources/mevo_cameras.md',
  'docs/computer/OBS/streaming/sources/PTZ_camera.md',
  'docs/computer/OBS/streaming/sources/proclaim.md',
  'docs/computer/OBS/streaming/sources/powerpoint.md',
  'docs/computer/OBS/streaming/sources/sound_system.md',
  'docs/computer/OBS/all_cams/index.md',
  'docs/computer/OBS/all_cams/recording.md',
  'docs/computer/OBS/all_cams/sources/index.md',
  'docs/computer/OBS/all_cams/sources/mevo_cameras.md',
  'docs/computer/OBS/all_cams/sources/PTZ_camera.md',
  'docs/computer/OBS/all_cams/sources/proclaim.md',
  'docs/computer/OBS/all_cams/sources/powerpoint.md',
  'docs/computer/OBS/all_cams/sources/sound_system.md',
  'docs/computer/OBS/all_cams/sources/outgoing_stream.md',
  'docs/computer/OBS/plugins/index.md',
  'docs/computer/OBS/plugins/multi_output.md',
  'docs/computer/OBS/plugins/ndi_tools.md',
  'docs/computer/OBS/plugins/ptz_controls.md',
  'docs/computer/proclaim/index.md',
  'docs/computer/proclaim/opening_slides.md',
  'docs/computer/proclaim/starting_slideshow.md',
  'docs/computer/proclaim/screen_settings.md',
  'docs/computer/proclaim/NDI_settings.md',
  'docs/computer/streamdeck/index.md',
  'docs/computer/streamdeck/OBS_scenes.md',
  'docs/computer/streamdeck/recording_streaming_controls.md',
  'docs/computer/streamdeck/PTZ_camera/index.md',
  'docs/computer/streamdeck/PTZ_camera/adding_presets.md',
  'docs/computer/streamdeck/PTZ_camera/presets_list.md',
  'docs/computer/streams/index.md',
  'docs/computer/streams/youtube/index.md',
  'docs/computer/streams/youtube/scheduling.md',
  'docs/computer/streams/youtube/starting.md',
  'docs/computer/streams/youtube/stopping.md',
  'docs/computer/streams/facebook/index.md',
  'docs/computer/streams/facebook/scheduling.md',
  'docs/computer/streams/facebook/starting.md',
  'docs/computer/streams/facebook/stopping.md',
  'docs/computer/maintanince/index.md',
  'docs/computer/maintanince/ccleaner.md',
  'docs/computer/maintanince/dell_support_assist.md',
  'docs/computer/maintanince/windows_update.md',
  'docs/computer/maintanince/nvidia_update.md',
  'docs/computer/maintanince/proclaim_updates.md',
  'docs/computer/maintanince/OBS/index.md',
  'docs/computer/maintanince/streaming_update.md',
  'docs/computer/maintanince/all_cams_update.md',
  'docs/computer/maintanince/OBS/plugins/index.md',
  'docs/computer/maintanince/OBS/plugins/multi_output.md',
  'docs/computer/maintanince/OBS/plugins/ndi_tools.md',
  'docs/computer/maintanince/OBS/plugins/ptz_controls.md',
  'docs/computer/maintanince/elgato/index.md',
  'docs/computer/maintanince/elgato/streamdeck.md',
  'docs/computer/maintanince/elgato/capture_card.md',
  'docs/online/index.md',
  'docs/online/login/index.md',
  'docs/online/account/index.md',
  'docs/online/account/user/index.md',
  'docs/online/account/admin/index.md',
  'docs/online/cms/index.md',
  'docs/online/passwords/index.md',
  'docs/online/passwords/accessing.md',
  'docs/online/passwords/viewing.md',
  'docs/online/passwords/adding.md',
  'docs/online/passwords/editing.md',
  'docs/online/passwords/removing.md',
  'docs/online/nextcloud/index.md',
  'docs/online/nextcloud/backups/index.md',
  'docs/online/nextcloud/backups/OBS/index.md',
  'docs/online/nextcloud/backups/OBS/all_cameras.md',
  'docs/online/nextcloud/backups/OBS/streaming_scenes.md',
  'docs/online/nextcloud/backups/ptz_camera_configs.md',
  'docs/online/nextcloud/backups/router_configs.md',
  'docs/online/documentation/index.md',
  'docs/advanced/index.md',
  'docs/advanced/technology/index.md',
  'docs/advanced/technology/hardware.md',
  'docs/advanced/technology/software.md',
  'docs/advanced/technology/not_in_use.md',
  'docs/advanced/cabling/index.md',
  'docs/advanced/router/index.md',
  'docs/advanced/router/settings/index.md',
  'docs/advanced/router/settings/list.md'
];

function stripFrontMatter(markdown) {
  return markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
}

function normalizeForPandoc(markdown) {
  return markdown
    .replace(/```([^`\n]+)```/g, '`$1`')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<img\s+([^>]*?)src=["']([^"']+)["']([^>]*)>/gi, '![]($2)')
    .replace(/\]\(([^)]+)\.md\)/g, ']($1.html)');
}

mkdirSync(workDir, {recursive: true});
mkdirSync(staticRoot, {recursive: true});

const sections = [
  '% Technology Documentation',
  '% Westminster Presbyterian Church',
  '% Version 2026.05a',
  ''
];

for (const relativeDoc of docOrder) {
  const absoluteDoc = join(docsRoot, relativeDoc);
  if (!existsSync(absoluteDoc)) {
    console.warn(`Skipping missing document: ${relativeDoc}`);
    continue;
  }

  const markdown = normalizeForPandoc(stripFrontMatter(readFileSync(absoluteDoc, 'utf8')));
  if (markdown.trim().length === 0) {
    continue;
  }

  sections.push(`\\newpage\n\n${markdown.trim()}\n`);
}

writeFileSync(combinedMarkdown, `${sections.join('\n\n')}\n`, 'utf8');

const pandocArgs = [
  combinedMarkdown,
  '--from',
  'markdown+pipe_tables+task_lists',
  '--toc',
  '--toc-depth=3',
  '--resource-path',
  `${docsRoot};${root}`,
  '--pdf-engine',
  process.env.PANDOC_PDF_ENGINE || 'xelatex',
  '--metadata',
  'title=Technology Documentation',
  '--metadata',
  'subtitle=Westminster Presbyterian Church - Mackey Hall Technology',
  '--metadata',
  'lang=en-US',
  '-o',
  outFile
];

const result = spawnSync('pandoc', pandocArgs, {stdio: 'inherit', shell: process.platform === 'win32'});

if (result.error || result.status !== 0) {
  console.error('\nPDF generation requires Pandoc and a PDF engine such as xelatex or tectonic.');
  console.error('Install Pandoc locally or use the GitHub Actions workflow, then run npm run docs:pdf.');
  process.exit(result.status || 1);
}

rmSync(workDir, {recursive: true, force: true});
console.log(`Wrote ${outFile}`);

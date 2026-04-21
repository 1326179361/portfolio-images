// 图片 CDN 工具函数
// 开发环境用本地路径，线上用 jsDelivr CDN
const CDN_BASE = 'https://cdn.jsdelivr.net/gh/1326179361/portfolio-images@main/public';

export function img(path: string): string {
  if (import.meta.env.DEV) {
    return path;
  }
  return CDN_BASE + path;
}

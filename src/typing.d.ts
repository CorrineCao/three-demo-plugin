declare module '*.json' {
    const value: any;
    export default value;
}

declare module '*.png';

declare module "*.less" {
    const content: { [className: string]: string };
    export default content;
}
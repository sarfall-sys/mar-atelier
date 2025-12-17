import appData from '../data/appData.json';

class DataLoader {
    static getAppData() {
        return appData;
    }

    static getRoutes() {
        return appData.routes;
    }
    static getServices() {
        return appData.services;
    }

    static getPricing() {
        return appData.pricing;
    }
    static getTestimonials() {
        return appData.testimonials;
    }
    static getAboutInfo() {
        return appData.about;
    }

}


export default DataLoader;

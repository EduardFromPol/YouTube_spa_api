

class SearchListController {
    async getList() {
        const searchList = await SearchListServices.getList();
        return searchList; 
    };
};

module.exports = new SearchListController();
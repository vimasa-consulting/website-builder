import MockAdapter from "axios-mock-adapter";

export default function registerMocks(mockInstance: MockAdapter) {

    // GET ALL PROJECTS
    const getAllProjectsPathRegex = new RegExp('\/projects\/\\?organizationId=*');
    mockInstance.onGet(getAllProjectsPathRegex).reply(200, [
        {
            "_id": "653bb903e0484085b1e898b8",
            "name": "Project 1",
            "organizationId": "653bb8e4e0484085b1e898b5",
            "files": [],
            "ownerUserId": "653bb1338e285cb5ea546390",
            "projectHostingAlias": "test.test.com",
            "collaborators": [
                "653bb1338e285cb5ea546390"
            ],
            "__v": 0
        },
        {
            "_id": "653bb908e0484085b1e898bb",
            "name": "Project 2",
            "organizationId": "653bb8e4e0484085b1e898b5",
            "files": [
                "653bb90fe0484085b1e898be",
                "653bb912e0484085b1e898c1"
            ],
            "ownerUserId": "653bb1338e285cb5ea546390",
            "projectHostingAlias": "test.test.com",
            "collaborators": [
                "653bb1338e285cb5ea546390"
            ],
            "__v": 0
        }
    ]);

    const createProjectRegex = new RegExp('\/project\/');
    mockInstance.onPost(createProjectRegex).reply(config => {
        const requestData = JSON.parse(config.data);

        const sampleResponse = {
                    "_id": "653bb903e0484085b1e89876",
                    "name": requestData.name,
                    "organizationId": "653bb8e4e0484085b1e89444",
                    "files": [],
                    "ownerUserId": "653bb1338e285cb5ea5464440",
                    "projectHostingAlias": requestData.projectHostingAlias,
                    "collaborators": [
                        "653bb1338e285cb5ea546440"
                    ],
                    "__v": 0
                }

        return [200, sampleResponse];
    });

}
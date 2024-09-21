const sanitizedMarkDown=require("../utils/showdownSanitizer")
class ProblemService{
    constructor(ProblemRepository){
     this.ProblemRepository=ProblemRepository
    }
    async createProblem(problemData){
        try {
           // sanitize
        problemData.description=sanitizedMarkDown(problemData.description);
        // 
        const problem=this.ProblemRepository.createProblemR(problemData);
        return problem; 
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getProblem(id){
        try {
            // Call the repository to get the problem by its ID
            const problem = await this.ProblemRepository.getProblemR(id);

            // Handle case if the problem is not found
            if (!problem) {
                throw error;
            }

            return problem;
        } catch (error) {
            console.error("Error fetching problem:", error);
            throw error;  // Re-throw the error to propagate it
        }
    }
    async getAllProblems(){
         try {
            const problems=this.ProblemRepository.getAllProblemsR();
         } catch (error) {
            console.log(error);
            throw error;
         }
    }
    async deleteProblem(id){
             try {
                const del =this.ProblemRepository.deleteProblemR(id);
             } catch (error) {
                console.log(error);
                throw error;
             }
    }
    async updateProblem(id){
        try {
            const updateProblem=this.ProblemRepository
        } catch (error) {
            
        }
    }
    }

module.exports=ProblemService;
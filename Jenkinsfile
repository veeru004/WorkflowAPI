@Library('piper-lib-os') _
node() {
    stage('prepare') {
        checkout scm
        setupCommonPipelineEnvironment script:this
    }
    stage('Checking') {
            sh 'apt-get install cf-cli'
    } 
//     stage('build') {
//         mtaBuild script: this
//     }
//     stage('deploy') {
//         cloudFoundryDeploy script: this
//     }   
}

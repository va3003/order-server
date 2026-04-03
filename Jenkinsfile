node {
    stage('Initialize'){
        // def dockerHome = tool 'myDocker'
        // env.PATH = "${dockerHome}/bin:${env.PATH}"
        env.PATH = "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:${env.PATH}"
        sh 'echo ${PATH}'
        sh 'docker -v'
    }
    // docker.image('node:lts-alpine').inside {
    stage('Checkout'){
        git url: 'https://github.com/va3003/order-server.git'
    }
    stage('Build and Deploy with Compose') { 
        // Builds images defined in your docker-compose.yml
        //only build not working as it skips creation of sub images. hence doing "up" instead of build
        sh 'docker -v'
        sh 'docker compose up -d'
        sh 'docker logs ${c.id}'
    }
    // stage('Deploy') { 
    //     // Builds images defined in your docker-compose.yml
    //     sh 'docker -v'
    //     sh 'docker compose up -d'
    //     sh 'docker logs ${c.id}'
    // }
}
(function(){
    'use strict';
    
    angular
        .module('album.controller',[])
        .controller('AlbumCtrl', AlbumCtrl);

function AlbumCtrl ($scope){
    
   
    $scope.images=[
        //usa tours
          {category : 'USA', image :'img/photos-gallery/usa/1.jpg', thumbnail:'img/photos-gallery/usa/1-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/2.jpg', thumbnail:'img/photos-gallery/usa/2-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/3.jpg', thumbnail:'img/photos-gallery/usa/3-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/4.jpg', thumbnail:'img/photos-gallery/usa/4-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/5.jpg', thumbnail:'img/photos-gallery/usa/5-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/6.jpg', thumbnail:'img/photos-gallery/usa/6-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/7.jpg', thumbnail:'img/photos-gallery/usa/7-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/8.jpg', thumbnail:'img/photos-gallery/usa/8-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/9.jpg', thumbnail:'img/photos-gallery/usa/9-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/10.jpg', thumbnail:'img/photos-gallery/usa/10-th.jpg', description : 'USA Tours' },
         {category : 'USA', image :'img/photos-gallery/usa/11.jpg', thumbnail:'img/photos-gallery/usa/11-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/12.jpg', thumbnail:'img/photos-gallery/usa/12-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/13.jpg', thumbnail:'img/photos-gallery/usa/13-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/14.jpg', thumbnail:'img/photos-gallery/usa/14-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/15.jpg', thumbnail:'img/photos-gallery/usa/15-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/16.jpg', thumbnail:'img/photos-gallery/usa/16-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/17.jpg', thumbnail:'img/photos-gallery/usa/17-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/18.jpg', thumbnail:'img/photos-gallery/usa/18-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/19.jpg', thumbnail:'img/photos-gallery/usa/19-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/20.jpg', thumbnail:'img/photos-gallery/usa/20-th.jpg', description : 'USA Tours' },
         {category : 'USA', image :'img/photos-gallery/usa/21.jpg', thumbnail:'img/photos-gallery/usa/21-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/22.jpg', thumbnail:'img/photos-gallery/usa/22-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/23.jpg', thumbnail:'img/photos-gallery/usa/23-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/24.jpg', thumbnail:'img/photos-gallery/usa/24-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/25.jpg', thumbnail:'img/photos-gallery/usa/25-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/26.jpg', thumbnail:'img/photos-gallery/usa/26-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/27.jpg', thumbnail:'img/photos-gallery/usa/27-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/28.jpg', thumbnail:'img/photos-gallery/usa/28-th.jpg', description : 'USA Tours' },
          {category : 'USA', image :'img/photos-gallery/usa/29.jpg', thumbnail:'img/photos-gallery/usa/29-th.jpg', description : 'USA Tours' },
        
        //canada tours
          {category : 'Canada', image :'img/photos-gallery/canada/1.jpg', thumbnail:'img/photos-gallery/canada/1-th.jpg', description : 'Canada Tours' },
          {category : 'Canada', image :'img/photos-gallery/canada/2.jpg', thumbnail:'img/photos-gallery/canada/2-th.jpg', description : 'Canada Tours' },
          {category : 'Canada', image :'img/photos-gallery/canada/3.jpg', thumbnail:'img/photos-gallery/canada/3-th.jpg', description : 'Canada Tours' },
          {category : 'Canada', image :'img/photos-gallery/canada/4.jpg', thumbnail:'img/photos-gallery/canada/4-th.jpg', description : 'Canada Tours' },
          {category : 'Canada', image :'img/photos-gallery/canada/5.jpg', thumbnail:'img/photos-gallery/canada/5-th.jpg', description : 'Canada Tours' },
          {category : 'Canada', image :'img/photos-gallery/canada/6.jpg', thumbnail:'img/photos-gallery/canada/6-th.jpg', description : 'Canada Tours' },
        
        //dubai tours
          {category : 'Dubai', image :'img/photos-gallery/dubai/1.jpg', thumbnail:'img/photos-gallery/dubai/1-th.jpg', description : 'Dubai Tours' }, 
                 {category : 'Dubai', image :'img/photos-gallery/dubai/2.jpg', thumbnail:'img/photos-gallery/dubai/2-th.jpg', description : 'Dubai Tours' }, 
                 {category : 'Dubai', image :'img/photos-gallery/dubai/3.jpg', thumbnail:'img/photos-gallery/dubai/3-th.jpg', description : 'Dubai Tours' }, 
                 {category : 'Dubai', image :'img/photos-gallery/dubai/4.jpg', thumbnail:'img/photos-gallery/dubai/4-th.jpg', description : 'Dubai Tours' },
        
          //uk tours
    {category : 'United Kingdom', image :'img/photos-gallery/uk/1.jpg', thumbnail:'img/photos-gallery/uk/1-th.jpg', description : 'United Kingdom Tours' }, 
    {category : 'United Kingdom', image :'img/photos-gallery/uk/2.jpg', thumbnail:'img/photos-gallery/uk/2-th.jpg', description : 'United Kingdom Tours' },
    {category : 'United Kingdom', image :'img/photos-gallery/uk/3.jpg', thumbnail:'img/photos-gallery/uk/3-th.jpg', description : 'United Kingdom Tours' }, 
    {category : 'United Kingdom', image :'img/photos-gallery/uk/4.jpg', thumbnail:'img/photos-gallery/uk/4-th.jpg', description : 'United Kingdom Tours' },
    {category : 'United Kingdom', image :'img/photos-gallery/uk/5.jpg', thumbnail:'img/photos-gallery/uk/5-th.jpg', description : 'United Kingdom Tours' }, 
    {category : 'United Kingdom', image :'img/photos-gallery/uk/6.jpg', thumbnail:'img/photos-gallery/uk/6-th.jpg', description : 'United Kingdom Tours' },
    {category : 'United Kingdom', image :'img/photos-gallery/uk/7.jpg', thumbnail:'img/photos-gallery/uk/7-th.jpg', description : 'United Kingdom Tours' }, 
    {category : 'United Kingdom', image :'img/photos-gallery/uk/8.jpg', thumbnail:'img/photos-gallery/uk/8-th.jpg', description : 'United Kingdom Tours' },
    {category : 'United Kingdom', image :'img/photos-gallery/uk/9.jpg', thumbnail:'img/photos-gallery/uk/9-th.jpg', description : 'United Kingdom Tours' }, 
    {category : 'United Kingdom', image :'img/photos-gallery/uk/10.jpg', thumbnail:'img/photos-gallery/uk/10-th.jpg', description : 'United Kingdom Tours' },
    {category : 'United Kingdom', image :'img/photos-gallery/uk/11.jpg', thumbnail:'img/photos-gallery/uk/11-th.jpg', description : 'United Kingdom Tours' }, 
    {category : 'United Kingdom', image :'img/photos-gallery/uk/12.jpg', thumbnail:'img/photos-gallery/uk/12-th.jpg', description : 'United Kingdom Tours' },
    {category : 'United Kingdom', image :'img/photos-gallery/uk/13.jpg', thumbnail:'img/photos-gallery/uk/13-th.jpg', description : 'United Kingdom Tours' }, 
    {category : 'United Kingdom', image :'img/photos-gallery/uk/14.jpg', thumbnail:'img/photos-gallery/uk/14-th.jpg', description : 'United Kingdom Tours' },
    {category : 'United Kingdom', image :'img/photos-gallery/uk/15.jpg', thumbnail:'img/photos-gallery/uk/15-th.jpg', description : 'United Kingdom Tours' }, 
    {category : 'United Kingdom', image :'img/photos-gallery/uk/16.jpg', thumbnail:'img/photos-gallery/uk/16-th.jpg', description : 'United Kingdom Tours' },
    {category : 'United Kingdom', image :'img/photos-gallery/uk/17.jpg', thumbnail:'img/photos-gallery/uk/17-th.jpg', description : 'United Kingdom Tours' }, 
    {category : 'United Kingdom', image :'img/photos-gallery/uk/18.jpg', thumbnail:'img/photos-gallery/uk/18-th.jpg', description : 'United Kingdom Tours' },
    {category : 'United Kingdom', image :'img/photos-gallery/uk/19.jpg', thumbnail:'img/photos-gallery/uk/19-th.jpg', description : 'United Kingdom Tours' }, 
    {category : 'United Kingdom', image :'img/photos-gallery/uk/20.jpg', thumbnail:'img/photos-gallery/uk/20-th.jpg', description : 'United Kingdom Tours' },
    {category : 'United Kingdom', image :'img/photos-gallery/uk/21.jpg', thumbnail:'img/photos-gallery/uk/21-th.jpg', description : 'United Kingdom Tours' }, 
    {category : 'United Kingdom', image :'img/photos-gallery/uk/22.jpg', thumbnail:'img/photos-gallery/uk/22-th.jpg', description : 'United Kingdom Tours' },
    {category : 'United Kingdom', image :'img/photos-gallery/uk/23.jpg', thumbnail:'img/photos-gallery/uk/23-th.jpg', description : 'United Kingdom Tours' }, 
    {category : 'United Kingdom', image :'img/photos-gallery/uk/24.jpg', thumbnail:'img/photos-gallery/uk/24-th.jpg', description : 'United Kingdom Tours' },
        
        
        
        
    ]; 
    
   $scope.currentImage = _.first($scope.images);
   $scope.imageCategories = _.uniq(_.pluck($scope.images, 'category'));
    
    $scope.setCurrentImage= function (image){
      $scope.currentImage = image;
    };


}

    
})();
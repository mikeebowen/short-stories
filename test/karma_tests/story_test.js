// var React = require('react/addons');
// var Story = require('../../app/js/components/story.jsx');
// var TestUtils = React.addons.TestUtils;
// var testUtilsAdditions = require('react-testutils-additions');

//   describe('Story component', function () {
//     var component;

//     afterEach(function () {
//       // if (component && testUtilsAdditions.isCompositeComponent(component) && component.isMounted()) {
//       //   React.unmountComponentAtNode(component.getDOMNode().parent);
//       // }
//     });

//     beforeEach(function () {
//       component = TestUtils.renderIntoDocument(React.createElement(Story));
//       component.props.data.storyTitle = 'front end test title';
//       component.props.data.author = 'front end author';
//       component.props.data.storyText = 'front end story text';
//       console.log('LLLLLLLLL', component);
//     });

//     it('should display a story', function () {
//       expect(component.props.data).toBeDefined();
//       expect(component.props.data.storyTitle).toBeDefined();
//       expect(component.props.data.storyTitle).toBe('front end test title');
//       expect(component.props.data.author).toBe('front end author');
//       expect(component.props.data.storyText).toBe('front end story text')
//     });

//   });

// var React = require('react');
// var ReactAddons = require('react/addons').addons;
// var TestUtils = ReactAddons.TestUtils;
// var Story = require('../../app/js/components/story.jsx');
// var expect = require('chai').expect;

// describe('<Story />', function () {
//   beforeAll(function () {

//     // Mock data.
//     this.storyData = {
//       author: 'Test Author',
//       storyTitle: 'Test title.',
//       storyText: 'This is a test story.'
//     };

//     // Render component with mock data.
//     this.component = TestUtils.renderIntoDocument(
//       React.createElement(Story)
//     );
//   });

//   beforeEach(function () {

//   });

//   it('receives story data', function () {
//     console.log('HELLO', this);
//     var componentData = this.component.props.data;

//     expect(componentData).to.exist;

//     expect(componentData.storyData.storyTitle).exist;
//     expect(componentData.storyData.storyTitle).to.equal(this.storyData.storyTitle);

//     expect(componentData.storyData.author).to.exist;
//     expect(componentData.storyData.author).to.equal(this.storyData.author);

//     expect(componentData.storyData.storyText).to.exist;
//     expect(componentData.storyData.storyText).to.equal(this.storyData.storyText);
//   });
// });

var React = require('react/addons');
var Story = require('../../app/js/components/story.jsx');
var TestUtils = React.addons.TestUtils;
var testUtilsAdditions = require('react-testutils-additions');

  describe('Story component', function () {
    var component;

    afterEach(function () {
      // if (component && testUtilsAdditions.isCompositeComponent(component) && component.isMounted()) {
      //   React.unmountComponentAtNode(component.getDOMNode().parent);
      // }
    });

    beforeEach(function () {
      var element = React.createElement(Story);
      element.props.data = {
        storyTitle: 'front end test title',
        author : 'front end author',
        storyText : 'front end story text'
      };
      component = TestUtils.renderIntoDocument(element);
      });

    it('should display a story', function () {
      expect(component.props.data).toBeDefined();
      expect(component.props.data.storyTitle).toBeDefined();
      expect(component.props.data.storyTitle).toBe('front end test title');
      expect(component.props.data.author).toBe('front end author');
      expect(component.props.data.storyText).toBe('front end story text')
    });

  });

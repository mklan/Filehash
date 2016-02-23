describe('Filehash', function() {

  var file = new File(["hello there!"], "file.txt");
  var hash = 'c69509590d81db2f37f9d75480c8efedf79a77933db5a8319e52e13bfd9874a3';

  describe('#hash(file)', function() {
    it('should return the correct hash', function(done) {
      Filehash.hash(file).then(function(result) {
        try {
          assert.equal(hash, result);
          done();
        } catch (err) {
          done(err);
        }

      });
    });
  });

  describe('#compare(file, hash)', function() {
    it('should return true for positive compare operation', function(done) {
      Filehash.compare(file, hash).then(function(result) {
        try {
          assert.isTrue(result, 'compare operation positive');
          done();
        } catch (err) {
          done(err);
        }

      });
    });
  });
});
